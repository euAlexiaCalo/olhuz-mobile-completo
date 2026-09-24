// Anexa automaticamente o Token JWT no cabeçalho das requisições
import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { STORAGE_KEYS } from '../storage/storageKeys';
import { ApiError } from './types';

export const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
    // ADICIONA O TOKEN NO CABEÇALHO AUTOMÁTICAMENTE
    axiosInstance.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            try {
                // Recupera o token do SecureStore
                const token = await SecureStore.getItemAsync(STORAGE_KEYS.TOKEN);

                // Se existir token, adiciona no cabeçalho
                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            } catch (error : unknown) {
                console.warn('Erro ao recuperar o token:', error);
            }
            return config;
        },
        // Repassa o erro para o app
        (error: AxiosError) => Promise.reject(error)
    );

    // TRATA O RETORNO DA REQUISIÇÃO
    axiosInstance.interceptors.response.use(
        // Repassa o sucesso para o app
        (response: AxiosResponse) => response,
        async (error: AxiosError<ApiError>) => {
            // Se o token for inválido ou expirado limpa o token do SecureStore
            if (error.response?.status === 401) {
                try {
                    // Quando tiver o service de logout, acrescentar aqui e remover linha abaixo
                    await SecureStore.deleteItemAsync(STORAGE_KEYS.TOKEN);
                }
                catch (deleteError : unknown) {
                    console.warn('Erro ao remover o token:', deleteError);
                }
            }

            // SE A API RETORNOU UM CORPO DE ERRO ESTRUTURADO
            if (error.response?.data) {
                return Promise.reject(error.response.data);
            }

            // TRATAMENTO PRECISO DE ERROS DE REDE / CONEXÃO / TIMEOUT
            let errorMessage = 'Ocorreu um erro desconhecido ao comunicar com o servidor.';
            let statusCode = error.response?.status || 500;

            if (error.code === 'ECONNABORTED') {
                errorMessage = 'A requisição demorou muito e foi cancelada (Timeout). O processamento da IA pode estar demorando.';
                statusCode = 408; // Request Timeout
            } else if (!error.response) {
                errorMessage = 'Não foi possível conectar ao servidor. Verifique se a API está ligada e se o IP está correto.';
                statusCode = 0; // Erro físico de rede (sem conexão)
            }

            const formattedError: ApiError = {
                error: true,
                message: errorMessage,
                statusCode: statusCode
            };

            return Promise.reject(formattedError);
        }
    );

    return axiosInstance;
};