import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from 'lucide-react-native';
import { RootStackParamList } from "../../../../App";
import { TokenViewModel } from "./ViewModelToken";
import { styles } from "../styles/tokenStyles";
export function TokenScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { email, setEmail, enviarToken } = TokenViewModel(navigation);

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
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={enviarToken}
      >
        {/* NAO ESQUECER DE COLOCAR IMAGEM NO BOTAO DE ENVIAR <Image
          source={require("../../assets/iconentrar.png")}
          style={styles.icon}
        /> */}

        <Text style={styles.buttonText}>
          Enviar token
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Se você não receber o e-mail,{"\n"}
        verifique na sua caixa de spam
      </Text>
    </View>
  );
}
