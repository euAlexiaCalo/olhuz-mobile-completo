import * as DocumentPicker from "expo-document-picker";

export interface SelectedFileResult {
  uri: string;
  name: string;
  type: "image" | "pdf" | "txt" | "other";
  mimeType?: string;
  size?: number;
}

// Função para abrir a galeria
export const pickDocumentOrImage =
  async (): Promise<SelectedFileResult | null> => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*", "text/plain"],
        // Copia o arquivo para o cache do dispositivo
        copyToCacheDirectory: true,
      });

      // Verifica se o usuário cancelou a seleção
      if (result.canceled || !result.assets || result.assets.length === 0) {
        return null;
      }

      // Obtém o primeiro arquivo selecionado
      const file = result.assets[0];
      // Verifica o tipo de arquivo
      const mimeType = file.mimeType || "";

      // Verifica o tipo de arquivo
      let fileType: "image" | "pdf" | "txt" | "other" = "other";
      if (mimeType.startsWith("image/")) {
        fileType = "image";
      } else if (mimeType === "application/pdf") {
        fileType = "pdf";
      } else if (mimeType === "text/plain") {
        fileType = "txt";
      }

      return {
        uri: file.uri,
        name: file.name,
        type: fileType,
        mimeType: mimeType,
        size: file.size,
      };
    } catch (error) {
      console.error("Erro ao selecionar o arquivo:", error);
      return null;
    }
  };
