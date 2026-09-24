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
import { RootStackParamList } from "../../../../App";
import { ValidarTokenViewModel } from "./ViewModelValidarToken";
import { styles } from "../styles/ValidarStyles";
type RouteProps = RouteProp<
  RootStackParamList,
  "ValidarTokenScreen"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList
>;

export function ValidarTokenScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const { email } = route.params;

  const vm = ValidarTokenViewModel(navigation);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>
        {vm.validarTokenJson.titulo}
      </Text>

      <Text style={styles.email}>
        {email}
      </Text>

      <TextInput
        style={styles.input}
        placeholder={
          vm.validarTokenJson.campo.token.placeholder
        }
        value={vm.token}
        onChangeText={vm.setToken}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => vm.validarToken(email)}
      >
        <Text style={styles.textoBotao}>
          {vm.validarTokenJson.botao.texto}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

