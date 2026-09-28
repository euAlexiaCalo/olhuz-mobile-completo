// Importações do React
import React from "react";
import { styles } from "../styles/editProfileStyles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../../navigation/AppNavigator";
import { useEditProfileViewModel } from "../viewModels/useEditProfileViewModel";

// Componentes do React Native
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Ícones
import {
  User,
  CalendarDays,
  Mail,
  Phone,
  FileUser,
} from "lucide-react-native";

type Props = NativeStackScreenProps<AppStackParamList, "EditProfile">;

/**
 * Tela Editar Perfil
 */
export function EditProfileScreen({ navigation }: Props) {
  const {
    user,
    formData,
    isLoading,
    handleInputChange,
    handleUpdateProfile,
  } = useEditProfileViewModel();

  const handleSave = () => {
    handleUpdateProfile(() => {
      navigation.goBack();
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.card}>
        <Text style={styles.title}>
          Informações do Perfil
        </Text>

        {/* Nome Completo (Editável) */}
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <User size={20} color="#1D3D87" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              placeholderTextColor="#888"
              value={formData.fullName}
              onChangeText={(text) => handleInputChange("fullName", text)}
            />
          </View>
        </View>

        {/* E-mail (Apenas leitura - vindo do usuário logado) */}
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <Mail size={20} color="#1D3D87" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={[styles.input, styles.inputDisabled]}
              value={user?.email || ""}
              editable={false}
            />
          </View>
        </View>

        {/* CPF (Apenas leitura) */}
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <FileUser size={20} color="#1D3D87" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={[styles.input, styles.inputDisabled]}
              value={user?.cpf || ""}
              editable={false}
            />
          </View>
        </View>

        {/* Telefone (Editável) */}
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <Phone size={20} color="#1D3D87" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(00) 00000-0000"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={formData.phoneNumber}
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
            />
          </View>
        </View>

        {/* Data de Nascimento (Apenas leitura) */}
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <CalendarDays size={20} color="#1D3D87" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
              style={[styles.input, styles.inputDisabled]}
              value={user?.birthDate || ""}
              editable={false}
            />
          </View>
        </View>

        {/* BOTÃO SALVAR */}
        <TouchableOpacity
          style={[styles.buttonContainer, isLoading && { opacity: 0.7 }]}
          onPress={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>
              Salvar Alterações
            </Text>
          )}
        </TouchableOpacity>

        {/* BOTÃO CANCELAR */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={isLoading}
        >
          <Text style={styles.cancelButtonText}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}