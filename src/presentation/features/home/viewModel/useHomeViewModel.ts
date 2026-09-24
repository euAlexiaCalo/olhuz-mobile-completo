import { useState } from "react";
import { Alert, Platform, ToastAndroid } from "react-native";
import { useAuth } from "../../../core/contexts/AuthContext";
import { takePhoto } from "../../../shared/utils/takePhoto";
import { pickDocumentOrImage } from "../../../shared/utils/pickDocumentOrImage";
import { readingService } from "../../reading/services/readingService";

export const useHomeViewModel = () => {
  // Busca os dados do usuário global logado
  const { user } = useAuth();

  // Pega apenas o primeiro nome para a saudação
  const firstName = user?.fullName?.split(" ")[0] || "Usuário";

  const [isLoading, setIsLoading] = useState(false);

  const showFeedback = (message: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      Alert.alert("Aviso", message);
    }
  };

  // ================================================
  // ENVIA PARA API ANALISAR O ARQUIVO
  // ================================================
  const processAndNavigate = async (
    type: string,
    uri: string,
    name: string,
    onSuccessNavigate: (params: any) => void) => {
    try {
      setIsLoading(true);
      showFeedback("Enviando arquivo e analisando com a IA...");

      // Chama o serviço que faz o post com FormData e devolve o DTO da leitura gerada
      const readingDto = await readingService.createReading(type, name, uri, name);

      if (readingDto && readingDto.id) {
        // Navega para os detalhes passando o item real retornado pelo backend com a descrição da IA
        onSuccessNavigate({ item: readingDto });
      } else {
        showFeedback("Erro ao processar os dados retornados.");
      }
    } catch (error: any) {
      console.error("Erro detalhado ao enviar arquivo:", error);
      // Exibe a mensagem exata do erro que veio da API (se houver) ou de rede
      const errorMsg = error?.message || "Erro de conexão com o servidor.";
      showFeedback(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  // ================================================
  // TIRAR FOTO
  // ================================================
  const handleTakePhoto = async (onSuccessNavigate: (params: any) => void) => {
    const photo = await takePhoto();
    if (photo && photo.uri) {
      await processAndNavigate("Imagem", photo.uri, photo.name || "foto_capturada.jpg", onSuccessNavigate);
    }
  };

  // ================================================
  // ESCOLHER ARQUIVO
  // ================================================
  const handleOpenFile = async (onSuccessNavigate: (params: any) => void) => {
    const selectedFile = await pickDocumentOrImage();
    if (selectedFile && selectedFile.uri) {
      const typeLabel = selectedFile.type === "pdf" ? "Documento" : "Imagem";
      await processAndNavigate(typeLabel, selectedFile.uri, selectedFile.name || "arquivo", onSuccessNavigate);
    }
  };

  return { firstName, isLoading, handleTakePhoto, handleOpenFile };
};