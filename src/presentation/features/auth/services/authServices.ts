// Serviços para autenticação
import axios from 'axios';
import api from '../../../../core/api/api';
import { ENDPOINTS } from '../../../../core/api/endpoints';
import { ApiResponse } from '../../../../core/api/types';
import { AuthResponseData, UserResponse } from '../types/authResponses';
import {
    RegisterDto,
    LoginDto,
    ForgotPasswordDto,
    VerifyTokenDto,
    ResetPasswordDto
} from '../types/authModels';

// ================================================
// SERVIÇO DE AUTENTICAÇÃO
// ================================================
export const authServices = {
    // Métodos assíncronos que possuem parâmetros que precisam seguir os formatos definidos nos DTOs e retornam os dados da resposta da API

    // REGISTRA UM NOVO USUÁRIO
    async register(data: RegisterDto): Promise<ApiResponse<UserResponse>> {
        // Envia os dados para a API
        const response = await api.post<ApiResponse<UserResponse>>(
            ENDPOINTS.AUTH.REGISTER,
            data
        );
        // Retorna os dados da resposta da API
        return response.data;
    },

    // FAZ O LOGIN DO USUÁRIO R RETORNA O TOKEN E DADOS DA SESSÃO
    async login(data: LoginDto):
        Promise<ApiResponse<AuthResponseData>> {
        const response = await api.post<ApiResponse<AuthResponseData>>(
            ENDPOINTS.AUTH.LOGIN,
            data);
        return response.data;
    },

    // SOLICITA O ENVIO DO TOKEN DE RECUPERAÇÃO PARA O E-MAIL DO USUÁRIO
    async requestPasswordReset(data: ForgotPasswordDto): Promise<ApiResponse<null>> {
        const response = await api.post<ApiResponse<null>>(
            ENDPOINTS.AUTH.FORGOT_PASSWORD,
            data
        );

        return response.data;
    },

    // VERIFICA O TOKEN DE RECUPERAÇÃO
    async verifyToken(data: VerifyTokenDto): Promise<ApiResponse<null>> {
        const response = await api.post<ApiResponse<null>>(
            ENDPOINTS.AUTH.VERIFY_TOKEN,
            data
        );

        return response.data;
    },

    // REDEFINE A SENHA DO USUÁRIO
    async resetPassword(data: ResetPasswordDto): Promise<ApiResponse<null>> {
        const response = await api.post<ApiResponse<null>>(
            ENDPOINTS.AUTH.RESET_PASSWORD,
            data
        );

        return response.data;
    },
}