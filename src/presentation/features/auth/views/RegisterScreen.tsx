import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  ActivityIndicator,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";
import { useRegisterViewModel } from "../viewModels/useRegisterViewModel";
import { UserPlus } from "lucide-react-native";
import { styles } from "../styles/registerStyles";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export function RegisterScreen({ navigation }: Props) {
  const {
    formData,
    acceptTerms,
    setAcceptTerms,
    isLoading,
    passwordStrength,
    handleInputChange,
    handleRegister,
  } = useRegisterViewModel();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        placeholderTextColor="#888"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange("fullName", text)}
      />

      <Text style={styles.label}>Data de nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="yyyy-mm-dd"
        placeholderTextColor="#888"
        value={formData.birthDate}
        onChangeText={(text) => handleInputChange("birthDate", text)}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(00) 00000-0000"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(text) => handleInputChange("phoneNumber", text)}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={formData.cpf}
        onChangeText={(text) => handleInputChange("cpf", text)}
      />

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
        placeholder="senha123..."
        placeholderTextColor="#888"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
      />

      {/* Indicador de força da senha */}
      <View style={styles.passwordStrength}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View
            key={item}
            style={[
              styles.strengthBar,
              {
                backgroundColor:
                  passwordStrength >= item
                    ? passwordStrength <= 2
                      ? "#FF0000"
                      : passwordStrength === 3
                        ? "#FFD700"
                        : "#2E8B57"
                    : "#D3D3D3",
              },
            ]}
          />
        ))}
      </View>

      <Text style={styles.strengthText}>
        {passwordStrength <= 1 && formData.password.length > 0 && "Senha muito fraca"}
        {passwordStrength === 2 && "Senha fraca"}
        {passwordStrength === 3 && "Senha média"}
        {passwordStrength === 4 && "Senha forte"}
        {passwordStrength === 5 && "Senha muito forte"}
      </Text>

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        style={styles.input}
        placeholder="senha123..."
        placeholderTextColor="#888"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
      />

      <View style={styles.checkArea}>
        <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
        <Text style={styles.termos}>
          Li/ouvi e aceito os Termos de Uso e Política de Privacidade
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, isLoading && { opacity: 0.7 }]}
        onPress={() => handleRegister(() => navigation.navigate("Login" as never))}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <>
            <UserPlus size={24} color="#FFF" strokeWidth={2.5} />
            <Text style={styles.txtBtn}>Criar Conta</Text>
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}