import * as ImagePicker from "expo-image-picker";

export interface SelectedImageResult {
    uri: string;
    name: string;
    type: "image";
}

export const takePhoto = async (): Promise<SelectedImageResult | null> => {
    try {
        // Solicita permissão para acessar a câmera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        // Se a permissão for negada, exibe uma mensagem de erro
        if (!permissionResult.granted) {
            alert("É necessária a permissão para acessar a câmera!");
            return null;
        }

        // Abre a câmera para tirar uma foto
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.8,
        });

        // Verifica se o usuário cancelou a seleção
        if (result.canceled || !result.assets || result.assets.length === 0) {
            return null;
        }

        const photo = result.assets[0];
        const fileName = photo.fileName || `foto_${Date.now()}.jpg`;

        return {
            uri: photo.uri,
            name: fileName,
            type: "image",
        };
    } catch (error) {
        console.error("Erro ao tirar foto:", error);
        return null;
    }
};