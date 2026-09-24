import { useState } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";

export function AlterarSenhaScreenViewModel(
  navigation: NativeStackNavigationProp<RootStackParamList>,
) {
  const [senha, setSenha] = useState("");

  function alterarSenha(email: string) {
    if (!senha.trim()) {
      Alert.alert(
        "Erro",
        "Digite uma senha válida para alterar."
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Senha alterada com sucesso!"
    );

    navigation.navigate("LoginScreen", {
      email,
    });
  }

  return {
    senha,
    setSenha,
    alterarSenha,
  };
}