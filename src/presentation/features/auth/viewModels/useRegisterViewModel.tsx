import { useState } from "react";

import { authServices } from "../services/authServices";

import { RegisterDto } from "../types/authModels";
import { isApiError } from "../../../../core/api/types";

import { Alert } from "react-native";

import { formatCPF, formatPhone } from "../../../../shared/utils/formatters";

export const useRegisterViewModel = () => {
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Controla aceitação dos termos
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Controla carregamento do cadastro
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<RegisterDto>({
    fullName: "",
    cpf: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (property: keyof RegisterDto, value: string) => {
    let formattedValue = value;

    if (property === "cpf") {
      formattedValue = formatCPF(value);
    }

    if (property === "phoneNumber") {
      formattedValue = formatPhone(value);
    }

    // Se o campo alterado for a senha, recalcula a força
    if (property === "password") {
      setPasswordStrength(calcularForcaSenha(value));
    }

    setFormData((prev) => ({
      ...prev,
      [property]: formattedValue,
    }));
  };

  const calcularForcaSenha = (senha: string) => {
    let pontos = 0;

    if (senha.length >= 1) pontos++;

    if (senha.length >= 6) pontos++;

    if (/[A-Z]/.test(senha)) pontos++;

    if (/[0-9]/.test(senha)) pontos++;

    if (/[^A-Za-z0-9]/.test(senha)) pontos++;

    return pontos;
  };

  const validateRegisterForm = (): boolean => {
    if (
      !formData.fullName.trim() ||
      !formData.phoneNumber ||
      !formData.cpf ||
      !formData.birthDate ||
      !formData.email.trim() ||
      !formData.password
    ) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");

      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Atenção", "As senhas não coincidem.");

      return false;
    }

    if (!acceptTerms) {
      Alert.alert(
        "Termos de Uso",
        "Você precisa aceitar os Termos de Uso e Política de Privacidade para continuar.",
      );

      return false;
    }

    return true;
  };
  const handleRegister = async (onSuccess: () => void) => {
    if (isLoading) return;

    if (!validateRegisterForm()) return;

    setIsLoading(true);

    try {
      // ==========================================
      // LIMPA OS DADOS ANTES DE ENVIAR PARA A API
      // ==========================================

      const payload: RegisterDto = {
        fullName: formData.fullName.trim(),

        // Remove pontos e hífen
        cpf: formData.cpf.replace(/\D/g, ""),

        // Já está no formato YYYY-MM-DD
        birthDate: formData.birthDate,

        phoneNumber: formData.phoneNumber.replace(/\D/g, ""),

        email: formData.email.trim(),

        password: formData.password,

        confirmPassword: formData.confirmPassword,
      };

      const response = await authServices.register(payload);

      if (response.data) {
        Alert.alert("Sucesso", "Conta criada com sucesso!");

        onSuccess();
      }
    } catch (error: unknown) {
      if (isApiError(error)) {
        Alert.alert("Erro ao cadastrar", error.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro inesperado.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    acceptTerms,
    setAcceptTerms,
    isLoading,
    passwordStrength,
    handleInputChange,
    handleRegister,
  };
};
