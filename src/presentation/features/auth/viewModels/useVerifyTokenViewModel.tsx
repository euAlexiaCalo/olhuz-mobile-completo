import { useState } from "react";
import { Alert } from "react-native";
import { authServices } from "../services/authServices";
import { isApiError } from "../../../../core/api/types";

export const useVerifyTokenViewModel = (email: string) => {
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // ================================================
    // ALTERAÇÃO DO CAMPO
    // ================================================
    const handleTokenChange = (value: string) => {
        // Garante que o estado receba apenas números, até 6 caracteres
        const numericValue = value.replace(/[^0-9]/g, "").slice(0, 6);
        setToken(numericValue);
    };

    // ================================================
    // VALIDAÇÃO
    // ================================================
    const validateToken = (): boolean => {
        if (!token || token.length !== 6) {
            Alert.alert("Atenção", "O código de verificação deve ter exatamente 6 dígitos.");
            return false;
        }
        return true;
    };

    // ================================================
    // VERIFICAR TOKEN NA API
    // ================================================
    const handleVerify = async (onSuccess: (email: string, token: string) => void) => {
        if (isLoading) return;

        if (!validateToken()) return;

        setIsLoading(true);

        try {
            // Dispara a requisição da API
            const response = await authServices.verifyToken({ email, token });

            if (!response.error) {
                // Repassa os dados validados para a View seguir com a navegação
                onSuccess(email, token);
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                Alert.alert("Erro", error.message);
            } else {
                Alert.alert("Erro", "Ocorreu um erro inesperado ao verificar o código.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { token, isLoading, handleTokenChange, handleVerify };
};