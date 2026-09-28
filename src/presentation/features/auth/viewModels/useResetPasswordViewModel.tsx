import { useState } from "react";
import { Alert } from "react-native";
import { authServices } from "../services/authServices";
import { isApiError } from "../../../../core/api/types";
import { ResetPasswordDto } from "../types/authModels";

export const useResetPasswordViewModel = (email: string, token: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<ResetPasswordDto>({
        token: token,
        email: email,
        newPassword: '',
        confirmPassword: ''
    });

    // ================================================
    // ALTERAÇÃO DO CAMPO
    // ================================================
    const handleInputChange = (property: keyof ResetPasswordDto, value: string) => {
        setFormData((prev) => ({ ...prev, [property]: value }));
    };

    // ================================================
    // VALIDAÇÃO
    // ================================================
    const validateForm = (): boolean => {
        if (!formData.newPassword || !formData.confirmPassword) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return false;
        }

        if (formData.newPassword.length < 8) {
            Alert.alert("Atenção", "A senha deve ter no mínimo 8 caracteres.");
            return false;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            Alert.alert("Atenção", "As senhas não coincidem.");
            return false;
        }

        return true;
    };

    // ================================================
    // REDEFINIR SENHA
    // ================================================
    const handleResetPassword = async (onSuccess: () => void) => {
        if (isLoading) return;

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // Dispara a requisição da API
            const response = await authServices.resetPassword(formData);

            if (!response.error) {
                Alert.alert("Sucesso", "Sua senha foi redefinida com sucesso!");
                onSuccess();
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                Alert.alert("Erro", error.message);
            } else {
                Alert.alert("Erro", "Ocorreu um erro inesperado ao redefinir a senha.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { formData, isLoading, handleInputChange, handleResetPassword };
};