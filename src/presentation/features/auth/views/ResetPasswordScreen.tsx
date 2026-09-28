import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";
import { useResetPasswordViewModel } from "../viewModels/useResetPasswordViewModel";

type Props = NativeStackScreenProps<AuthStackParamList, "ResetPassword">;

export function ResetPasswordScreen({ navigation, route }: Props) {
  // Recebe os dados validados das rotas anteriores
  const email = route.params?.email ?? "";
  const token = route.params?.token ?? "";

  const { formData, isLoading, handleInputChange, handleResetPassword } = 
    useResetPasswordViewModel(email, token);

  const onSubmit = () => {
    handleResetPassword(() => {
      // Navega de volta para o Login após o sucesso
      navigation.navigate("Login" as never);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Alterar Senha</Text>

      <Text style={styles.email}>{email}</Text>

      <Text style={styles.label}>Nova senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        placeholderTextColor="#8A8A8A"
        secureTextEntry
        value={formData.newPassword}
        onChangeText={(text) => handleInputChange("newPassword", text)}
      />

      <Text style={styles.label}>Confirmar nova senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme a nova senha"
        placeholderTextColor="#8A8A8A"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
      />

      <TouchableOpacity
        style={[styles.botao, isLoading && { opacity: 0.7 }]}
        onPress={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.textoBotao}>
            Alterar senha
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FF",
    padding: 25,
    justifyContent: "center",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
  },

  backText: {
    fontSize: 32,
    color: "#1A237E",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#1A237E",
  },

  email: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 25,
    color: "#555",
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1A237E",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
    color: "#000",
  },

  botao: {
    backgroundColor: "#1E9B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});