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
import { RootStackParamList } from "../../../../App";
import { ViewModelLogin }from "../viewModels/ViewModelLogin";
import { LogIn } from "lucide-react-native";
import { styles } from "../styles/loginStyles";

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    email,
    senha,
    mostrarSenha,
    onChange,
    toggleMostrarSenha,
  } = ViewModelLogin();

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
          value={email}
          onChangeText={(text) => onChange("email", text)}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => onChange("senha", text)}
        />

        <TouchableOpacity onPress={toggleMostrarSenha}>
          <Text style={styles.link}>
            {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Ouvir senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("TokenScreen")}
        >
          <Text style={styles.esqueci}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}>
           <LogIn
                    size={24}
                    color="#FFFFFF"
                    strokeWidth={2.9}
          
                  />
       
        <Text style={styles.txtBtn}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

