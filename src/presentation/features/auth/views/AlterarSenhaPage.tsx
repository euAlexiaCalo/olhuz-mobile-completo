import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../App";
import { AlterarSenhaScreenViewModel } from "../../AlterarSenhaPage/ViewModelAlterarSenha";

type RouteProps = RouteProp<
  RootStackParamList,
  "ValidarTokenScreen"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ValidarTokenScreen"
>;

export function AlterarSenhaScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const { email } = route.params;

  const {
    senha,
    setSenha,
    alterarSenha,
  } = AlterarSenhaScreenViewModel(navigation);

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

      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alterarSenha(email)}
      >
        <Text style={styles.textoBotao}>
          Alterar senha
        </Text>
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
    marginBottom: 25,
    color: "#1A237E",
  },

  email: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 25,
    color: "#555",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },

  botao: {
    backgroundColor: "#1E9B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});