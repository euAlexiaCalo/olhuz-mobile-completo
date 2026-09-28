import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";
import { useTokenViewModel } from "../viewModels/useTokenViewModel";
import { styles } from "../styles/tokenStyles";

type Props = NativeStackScreenProps<AuthStackParamList, "ForgotPassword">;

export function TokenScreen({ navigation, route }: Props) {
  // Captura o e-mail da rota se houver
    const initialEmail = route.params?.email ?? "";

  const { email, handleEmailChange, handleRequestToken, isLoading } =
    useTokenViewModel(initialEmail);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Receber Token</Text>

      <Text style={styles.description}>
        Insira seu e-mail cadastrado para receber o token de segurança
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#8A8A8A"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => handleEmailChange("email", text)}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, isLoading && { opacity: 0.7 }]}
        onPress={() => handleRequestToken((submittedEmail) => navigation.navigate("VerifyToken", { email: submittedEmail}))}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            Enviar token
          </Text>
        )}
      </TouchableOpacity>

      <Text style={styles.footer}>
        Se você não receber o e-mail,{"\n"}
        verifique na sua caixa de spam
      </Text>
    </View>
  );
}