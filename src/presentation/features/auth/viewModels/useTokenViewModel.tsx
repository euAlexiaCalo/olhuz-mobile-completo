import React, { useState, } from "react";
import { authServices } from "../services/authServices";
import { isApiError } from "../../../../core/api/types";
import { Alert } from "react-native";
import { ForgotPasswordDto } from "../types/authModels";

export const useTokenViewModel = (initialEmail: string = "") => {
    const [email, setEmail] = useState(initialEmail);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (property: keyof ForgotPasswordDto, value: string) => {
        setEmail(value);
    };

    const validateEmail = (): boolean => {

        const cleanEmail = email.trim();

        if (!cleanEmail) {
            Alert.alert(
                "Atenção",
                "Informe seu e-mail."
            );
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(cleanEmail)) {
            Alert.alert(
                "Atenção",
                "Informe um endereço de e-mail válido."
            );
            return false;
        }
        return true;
    };

    const handleRequestToken = async (onSuccess: (email: string) => void) => {
        if (isLoading) {
            return false;
        }

        if (!validateEmail()) {
            return false;
        }

        setIsLoading(true);

        try {
            const response = await authServices.requestPasswordReset({ email });

            if (!response.error) {
                // Mostra o alerta e navega para a próxima tela repassando o e-mail
                Alert.alert("Sucesso", response.message || "Código enviado para o seu e-mail.");
                onSuccess(email);
            }

            return true;

        } catch (error: unknown) {

            if (isApiError(error)) {
                Alert.alert(
                    "Erro",
                    error.message
                );
            } else {
                Alert.alert(
                    "Erro",
                    "Ocorreu um erro inesperado ao solicitar o token."
                );
            }

            return false;

        } finally {
            setIsLoading(false);
        }
    }

    return { email, handleEmailChange, handleRequestToken, isLoading };
};