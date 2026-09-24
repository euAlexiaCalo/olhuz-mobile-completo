import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

import { User } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { RegisterViewModel } from "./ViewModelRegister";
import { UserPlus } from "lucide-react-native";
import { Use } from "react-native-svg";
import { styles } from "../styles/registerStyles";

export const RegisterScreen = () => {

  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const vm = RegisterViewModel(navigation);

return(
    <ScrollView style={styles.container}>

     <TouchableOpacity onPress={() => navigation.goBack()}>
  <Text style={styles.back}>←</Text>
</TouchableOpacity>

      <Text style={styles.title}>
        Criar Conta
      </Text>

      <Text style={styles.label}>
        Nome completo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={vm.nome}
        onChangeText={vm.setNome}
      />

      <Text style={styles.label}>
        Data de nascimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="dd/mm/yyyy"
        value={vm.dataNascimento}
        onChangeText={vm.setDataNascimento}
      />

      <Text style={styles.label}>
        CPF
      </Text>

      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        value={vm.cpf}
        onChangeText={vm.setCpf}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        value={vm.email}
        onChangeText={vm.setEmail}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="senha123..."
        secureTextEntry
        value={vm.senha}
        onChangeText={vm.setSenha}
      />

<View style={styles.passwordStrength}>
  {[1,2,3,4,5].map((item) => (
    <View
      key={item}
      style={[
        styles.strengthBar,
        {
         backgroundColor:
  vm.forcaSenha >= item
    ? vm.forcaSenha <= 2
      ? "#FF0000"
      : vm.forcaSenha === 3
      ? "#FFD700"
      : "#2E8B57"
    : "#D3D3D3",
        },
      ]}
    />
  ))}
</View>

<Text style={styles.strengthText}>
  {vm.forcaSenha <= 1 && "Senha muito fraca"}
  {vm.forcaSenha === 2 && "Senha fraca"}
  {vm.forcaSenha === 3 && "Senha média"}
  {vm.forcaSenha === 4 && "Senha forte"}
  {vm.forcaSenha === 5 && "Senha muito forte"}
</Text>
      <Text style={styles.label}>
        Confirmar senha
      </Text>

      <TextInput
        style={styles.input}
         placeholder="senha123..."
        secureTextEntry
        value={vm.confirmarSenha}
        onChangeText={vm.setConfirmarSenha}
      />

      <View style={styles.checkArea}>
        <Switch
          value={vm.aceitou}
          onValueChange={vm.setAceitou}
        />

        <Text style={styles.termos}>
          Li/ouvi e aceito os Termos de Uso e Política de Privacidade
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={vm.cadastrar}
      >

        < UserPlus 
        size = {24}
        color = "#FFF"
        strokeWidth = {2.5}

        />

        <Text style={styles.txtBtn}>
          Criar Conta
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};
