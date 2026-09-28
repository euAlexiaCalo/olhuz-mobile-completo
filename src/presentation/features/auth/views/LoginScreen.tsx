import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";
import { useLoginViewModel } from "../viewModels/useLoginViewModel";
import { LogIn } from "lucide-react-native";
import { styles } from "../styles/loginStyles";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const {
    formData,
    mostrarSenha,
    toggleMostrarSenha,
    isLoading,
    handleInputChange,
    handleLogin,
  } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Acessar Conta</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarSenha}
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <TouchableOpacity onPress={toggleMostrarSenha}>
          <Text style={styles.link}>
            {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("TokenScreen" as never)}
        >
          <Text style={styles.esqueci}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.btnEntrar, isLoading && { opacity: 0.7 }]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <>
            <LogIn
              size={24}
              color="#FFFFFF"
              strokeWidth={2.9}
            />
            <Text style={styles.txtBtn}>
              Entrar
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}