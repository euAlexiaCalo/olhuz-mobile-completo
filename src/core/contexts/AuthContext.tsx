// Gerencia o estado global de autenticação, carrega os dados salvos quando o app abrir e fornece os métodos de entrada e saída
import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { secureStorage } from "../storage/secureStorage";
import { STORAGE_KEYS } from "../storage/storageKeys";
import { UserResponse, AuthResponseData } from "../../features/auth/types/authResponses";

// TIPAGEM DAS FUNÇÕES QUE VAI EXPORTAR PARA O APP
interface AuthContextData {
    user: UserResponse | null;
    isAuthenticated: boolean;
    // Controla o carregamento inicial ao abrir o app
    isLoading: boolean;
    signIn: (data: AuthResponseData) => Promise<void>;
    signOut: () => Promise<void>;
    updateUserContext: (updatedUser: UserResponse) => Promise<void>;
}

// ================================================
// CRIAÇÃO DO CONTEXTO E PROVIDER
// ================================================
const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<UserResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Busca os dados no SecureStore assim que o app é aberto
    useEffect(() => {
        async function loadStorageData() {
            try {
                const storedUser = await secureStorage.getObject<UserResponse>(STORAGE_KEYS.USER);
                const storedToken = await secureStorage.getItem(STORAGE_KEYS.TOKEN);
                const storedExpiresAt = await secureStorage.getItem(STORAGE_KEYS.EXPIRES_AT);

                // Só restaura a sessão se possuir ambos os dados salvos
                if (storedUser && storedToken && storedExpiresAt) {
                    // Converte as datas para milissegundos e compara
                    const isExpired = new Date(storedExpiresAt).getTime() < new Date().getTime();

                    if (!isExpired) {
                        // Token válido: restaura a sessão
                        setUser(storedUser);
                    } else {
                        // Token expirado: limpa a sujeira do storage
                        await secureStorage.removeItem(STORAGE_KEYS.TOKEN);
                        await secureStorage.removeItem(STORAGE_KEYS.EXPIRES_AT);
                        await secureStorage.removeItem(STORAGE_KEYS.USER);
                    }
                }
            } catch (error) {
                console.error('Erro ao restaurar sessão:', error);
            } finally {
                // Libera o carregamento das rotas independente do resultado
                setIsLoading(false);
            }
        }

        loadStorageData();
    }, []);

    // ================================================
    // MÉTODOS DE CONTROLE DE SESSÃO
    // ================================================
    // Recebe o payload de sucesso do AuthService e salva no dispositivo
    const signIn = async (data: AuthResponseData) => {
        await secureStorage.setItem(STORAGE_KEYS.TOKEN, data.token);
        await secureStorage.setItem(STORAGE_KEYS.EXPIRES_AT, data.expiresAt);
        await secureStorage.setObject<UserResponse>(STORAGE_KEYS.USER, data.user);

        // Atualiza o estado do React para disparar a navegação
        setUser(data.user);
    };

    // Limpa o armazenamento e desloga o usuário
    const signOut = async () => {
        await secureStorage.removeItem(STORAGE_KEYS.TOKEN);
        await secureStorage.removeItem(STORAGE_KEYS.EXPIRES_AT);
        await secureStorage.removeItem(STORAGE_KEYS.USER);

        setUser(null);
    };

    // Atualiza os dados do usuário no contexto e no armazenamento
    const updateUserContext = async (updatedUser: UserResponse) => {
        await secureStorage.setObject<UserResponse>(STORAGE_KEYS.USER, updatedUser);
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, signIn, signOut, updateUserContext }}>
            {children}
        </AuthContext.Provider>
    );
};
// ================================================
// HOOK CUSTOMIZADO
// ================================================

export const useAuth = () => {
    const context = useContext(AuthContext);

    // Impede que o hook seja usado fora do Provider
    if (!context) {
        throw new Error('useAuth deve ser utilizado dentro de um AuthProvider.');
    }

    return context;
};