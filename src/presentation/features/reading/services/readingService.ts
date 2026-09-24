import api from "../../../../core/api/api";
import { ENDPOINTS } from "../../../../core/api/endpoints";
import { ApiResponse } from "../../../../core/api/types";
import { ReadingHistoryDto } from "../types/readingModels";
import { Platform } from "react-native";

export const readingService = {
  async getReadings(): Promise<ApiResponse<ReadingHistoryDto[]>> {
    const response = await api.get<ApiResponse<ReadingHistoryDto[]>>(ENDPOINTS.READINGS.GET_ALL);
    return response.data;
  },

  async createReading(type: string, title: string, fileUri: string, fileName?: string): Promise<ReadingHistoryDto> {

    const formData = new FormData();

    formData.append("Type", type);
    formData.append("Title", title);

    if (fileUri) {
      const name = fileName || `arquivo_${Date.now()}.jpg`;
      const match = /\.(\w+)$/.exec(name);
      const ext = match ? match[1].toLowerCase() : 'jpg';
      const fileType = ext === 'pdf' ? 'application/pdf' : `image/${ext === 'png' ? 'png' : 'jpeg'}`;

      // Adiciona o arquivo no formato que o React Native / Expo envia para o FormData do .NET
      formData.append("File", {
        uri: Platform.OS === "ios" ? fileUri.replace("file://", "") : fileUri,
        name: name,
        type: fileType,
      } as any);
    }

    try {
      const response = await api.post<ApiResponse<ReadingHistoryDto>>(ENDPOINTS.READINGS.CREATE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data && response.data.data) {
        return response.data.data;
      }

      throw new Error(response.data?.message || "Erro desconhecido ao salvar a leitura.");
    } catch (error: any) {
      // Captura o erro detalhado que vem da API do C# (seja erro da IA ou validação)
      const serverMessage = error?.message || error?.data?.message || "Erro de conexão ao enviar o arquivo.";
      console.error("Erro no createReading:", serverMessage);
      throw new Error(serverMessage);
    }
  }
};