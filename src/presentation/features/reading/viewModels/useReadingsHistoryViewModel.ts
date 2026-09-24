import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { readingService } from "../services/readingService";
import { ReadingHistoryDto } from "../types/readingModels";

export const useReadingsViewModel = () => {
  const [readings, setReadings] = useState<ReadingHistoryDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define o comprimento máximo do título de acordo com a largura da tela
  const { width } = useWindowDimensions();
  const titleMaxLength = width > 768 ? 66 : 18;

  const fetchReadings = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await readingService.getReadings();

      // O backend retorna a lista diretamente em response.data
      if (response.data && Array.isArray(response.data)) {
        setReadings(response.data);
      }
    } catch (error: unknown) {
      console.error("Erro ao carregar leituras:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Atualiza a lista sempre que o usuário entrar na tela de histórico
  useFocusEffect(
    useCallback(() => {
      fetchReadings();
    }, [fetchReadings])
  );

  return {
    readings,
    isLoading,
    titleMaxLength,
    refreshReadings: fetchReadings,
  };
};