import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { preferencesService } from "../services/preferencesService";
import { isApiError } from "../../../../core/api/types";
import { UpdateUserPreferencesDto, ThemeType, VoiceType } from "../types/preferencesModels";

export const usePreferencesViewModel = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [preferences, setPreferences] = useState<UpdateUserPreferencesDto>({
        screenReader: false,
        speechRate: 1.0,
        voiceType: VoiceType.Feminina,
        volumeLevel: 50,
        theme: ThemeType.Light,
        vibrationEnabled: true,
        alertSoundEnabled: true,
    });

    // Busca os dados assim que a tela abre
    const fetchPreferences = useCallback(async () => {
        try {
            const response = await preferencesService.getPreferences();
            if (response.data) {
                setPreferences(response.data);
            }
        } catch (error) {
            console.error("Erro ao buscar preferências", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPreferences();
    }, [fetchPreferences]);

    // Função para alterar qualquer configuração instantaneamente
    const handleToggleChange = async (field: keyof UpdateUserPreferencesDto, value: any) => {
        // Atualiza a tela imediatamente
        const updatedPreferences = { ...preferences, [field]: value };
        setPreferences(updatedPreferences);

        try {
            await preferencesService.updatePreferences(updatedPreferences);
        } catch (error: unknown) {
            // Em caso de erro, reverte a alteração visual e avisa o usuário
            setPreferences(preferences); 
            if (isApiError(error)) {
                Alert.alert("Erro", error.message);
            } else {
                Alert.alert("Erro", "Não foi possível salvar a preferência.");
            }
        }
    };

    return { preferences, isLoading, handleToggleChange };
};