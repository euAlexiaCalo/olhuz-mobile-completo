import { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "../../../../core/contexts/AuthContext";
import { userServices } from "../services/userServices";
import { isApiError } from "../../../../core/api/types";
import { UpdateUserProfileDto } from "../types/userModels";
import { formatPhone } from "../../../../shared/utils/formatters";

export const useEditProfileViewModel = () => {
    const { user, updateUserContext } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    
    // Inicia o formulário já com os dados atuais do usuário logado
    const [formData, setFormData] = useState<UpdateUserProfileDto>({
        fullName: user?.fullName || "",
        phoneNumber: formatPhone(user?.phoneNumber) || "",
    });

    // Altera o valor de um campo do formulário
    const handleInputChange = (property: keyof UpdateUserProfileDto, value: string) => {
        let formattedValue = value;

        if (property === "phoneNumber") {
            formattedValue = formatPhone(value);
        }

        setFormData((prev) => ({ ...prev, [property]: formattedValue }));
    };

    // Atualiza o perfil do usuário
    const handleUpdateProfile = async (onSuccess: () => void) => {
        if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
            Alert.alert("Atenção", "O nome e o telefone não podem ficar vazios.");
            return;
        }

        setIsLoading(true);

        try {
            // Remove todos os caracteres não numéricos do telefone antes de enviar para a API
            const payload: UpdateUserProfileDto = {
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber.replace(/\D/g, "")
            };

            const response = await userServices.updateProfile(payload);

            if (!response.error && response.data) {
                // Atualiza os dados globalmente no aplicativo
                await updateUserContext(response.data);
                Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
                onSuccess();
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                Alert.alert("Erro", error.message);
            } else {
                Alert.alert("Erro", "Ocorreu um erro inesperado ao atualizar o perfil.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { user, formData, isLoading, isCancelModalVisible, setCancelModalVisible, handleInputChange, handleUpdateProfile };
};