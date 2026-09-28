import { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from "../../../../core/contexts/AuthContext";
import { userServices } from "../services/userServices";
import { isApiError } from "../../../../core/api/types";

export const useProfileViewModel = () => {
    // Puxa os dados do usuário e a função de deslogar do estado global
    const { user, signOut } = useAuth();

    // Controle de carregamento (spinner do botão)
    const [isLoading, setIsLoading] = useState(false);

    // Controle de visibilidade do Modal de confirmação
    const [isDeactivateModalVisible, setDeactivateModalVisible] = useState(false);
    const [isSignOutModalVisible, setSignOutModalVisible] = useState(false);

    // ================================================
    // AÇÃO PARA DESATIVAR CONTA
    // ================================================
    const handleDeactivateAccount = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await userServices.deactivateAccount();

            if (!response.error) {
                setDeactivateModalVisible(false);
                Alert.alert("Conta desativada", "Sua conta foi desativada com sucesso.");

                // Desloga o usuário e limpa o SecureStore automaticamente
                await signOut();
            }
        } catch (error: unknown) {
            setDeactivateModalVisible(false); // Fecha o modal em caso de erro

            if (isApiError(error)) {
                Alert.alert("Erro", error.message);
            } else {
                Alert.alert("Erro", "Ocorreu um erro ao tentar desativar a conta.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOutConfirm = async () => {
        setSignOutModalVisible(false);
        await signOut();
    };

    return { 
    user, 
    isLoading, 
    isDeactivateModalVisible, 
    setDeactivateModalVisible, 
    handleDeactivateAccount,
    isSignOutModalVisible,
    setSignOutModalVisible,
    handleSignOutConfirm
};
};