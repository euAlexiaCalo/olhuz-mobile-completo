// Importações do React
import React, { useState } from "react";

// Componentes do React Native
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Ícones
import {
  User,
  CalendarDays,
  Mail,
  Phone,
  FileUser,
} from "lucide-react-native";

/**
 * Tela Editar Perfil
 */
export const EditProfileScreen = () => {

  // States

  const [nome, setNome] = useState("Nome Sobrenome");
  const [dataNascimento] = useState("00/00/0000");
  const [email, setEmail] = useState("email@email.com");
  const [telefone, setTelefone] = useState("(11) 99999-9999");
  const [cpf] = useState("000.000.000-00");

  


  /**
   * Dados exibidos na tela
   */
  const dadosUsuario = [
    {
      id: "1",
      label: "Nome Completo",
      value: nome,
      editable: true,
      icon: User,
    },
    {
      id: "2",
      label: "Data de Nascimento",
      value: dataNascimento,
      editable: false,
      icon: CalendarDays,
    },
    {
      id: "3",
      label: "E-mail",
      value: email,
      editable: true,
      icon: Mail,
    },
    {
      id: "4",
      label: "Telefone",
      value: telefone,
      editable: true,
      icon: Phone,
    },
    {
      id: "5",
      label: "CPF",
      value: cpf,
      editable: false,
      icon: FileUser,
    },
  ];

  /**
   * JSX DA TELA
   * IMPORTANTE:
   * React Navigation exige que a Screen retorne JSX
   */
 return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.scrollContainer}
  >
    <View style={styles.card}>

      <Text style={styles.title}>
        Informações do Perfil
      </Text>

      {dadosUsuario.map((item) => {
        const Icon = item.icon;

        return (
          <View
            key={item.id}
            style={styles.fieldContainer}
          >
            <View style={styles.iconContainer}>
              <Icon size={20} color="#1D3D87" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>
                {item.label}
              </Text>

              <TextInput
                style={[
                  styles.input,
                  !item.editable && styles.inputDisabled,
                ]}
                value={item.value}
                editable={item.editable}
              />
            </View>
          </View>
        );
      })}

      {/* BOTÃO SALVAR */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          console.log("Salvar clicado");
        }}
      >
        <Text style={styles.buttonText}>
          Salvar Alterações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.cancelButton}
  onPress={() => {
    console.log("Cancelar clicado");
  }}
>
  <Text style={styles.cancelButtonText}>
    Cancelar
  </Text>
</TouchableOpacity>

    </View>
  </ScrollView>
  
);
};