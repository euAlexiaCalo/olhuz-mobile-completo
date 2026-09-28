import React, { useState } from "react";
import { useAuth } from "../../../../core/contexts/AuthContext";
import { authServices } from "../services/authServices";
import { isApiError } from "../../../../core/api/types";
import { Alert } from "react-native";
import { LoginDto } from "../types/authModels";

export const useLoginViewModel = () => {
  // Recebe a função de login do AuthContext
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginDto>({
    email: "",
    password: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleInputChange = (property: keyof LoginDto, value: string) => {
    setFormData((prev) => ({ ...prev, [property]: value }));
  };

  // cria uma função para processar o login
  const handleLogin = async () => {
    if (isLoading) return;

    if (!formData.email || !formData.password) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await authServices.login(formData);

      if (response.error) {
        Alert.alert(
          "Erro",
          response.message
        );

        return;
      }

      if (response.data) {
        await signIn(response.data);
      }
    } catch (error: unknown) {
      if (isApiError(error)) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro inesperado.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, mostrarSenha, toggleMostrarSenha, isLoading, handleInputChange, handleLogin };
};
