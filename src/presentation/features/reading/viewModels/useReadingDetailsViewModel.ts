import { useState } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../../navigation/AppNavigator";
import { ReadingHistoryDto } from "../types/readingModels";

type ReadingDetailsRouteProp = RouteProp<AppStackParamList, "ReadingDetails">;
type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

export const useReadingDetailsViewModel = () => {
  const route = useRoute<ReadingDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();

  // Recupera o item enviado via parâmetro de navegação (compatível com o ReadingHistoryDto)
  const item: ReadingHistoryDto = route.params?.item || {
    id: "",
    type: "Documento",
    title: "Título da leitura",
    fileName: undefined,
    fileUri: undefined,
    fileSize: undefined,
    uploadDate: "Data da leitura",
    descriptionText: "Nenhuma descrição disponível.",
  };

  // Estados locais dos modais e interações da tela
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDeleteSuccess = () => {
    setIsDeleteModalVisible(false);
    navigation.navigate("BottomTabs");
  };

  return {
    item,
    isImageModalVisible,
    setIsImageModalVisible,
    isDeleteModalVisible,
    setIsDeleteModalVisible,
    handleGoBack,
    handleDeleteSuccess,
  };
};