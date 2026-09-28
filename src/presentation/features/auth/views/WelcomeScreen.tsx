import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { ExternalLink } from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";

import { ButtonForm } from "../../../../shared/components/ButtonForms";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../styles/welcomeStyles";

type Props = NativeStackScreenProps<AuthStackParamList, "Welcome">;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
      <Image
        source={require("../../../../assets/img/bg-part-1.png")}
        style={styles.bgPart1}
        resizeMode="cover"
      />
      <Image
        source={require("../../../../assets/img/bg-part-2.png")}
        style={styles.bgPart2}
        resizeMode="cover"
      />
      <Image
        source={require("../../../../assets/img/bg-part-3.png")}
        style={styles.bgPart3}
        resizeMode="cover"
      />
      <Image
        source={require("../../../../assets/img/bg-part-4.png")}
        style={styles.bgPart4}
        resizeMode="cover"
      />
        <View style={styles.content}>
          <Image
            source={require("../../../../assets/img/logo-olhuz.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Bem-vindo ao Olhuz</Text>

          <Text style={styles.subtitle}>
            Sua plataforma inteligente para gerenciar imagens com segurança e
            praticidade.
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <ButtonForm
            icon={<Ionicons name="log-in-outline" size={30} color="#fff" />}
            title="Entrar"
            txtColor="#FFFFFF"
            bgColor="#228B00"
            onPress={() => navigation.navigate("Login")}
          />

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.line} />
          </View>

          <ButtonForm
            icon={<Ionicons name="person-add-outline" size={24} color="#fff" />}
            title="Criar conta"
            txtColor="#FFFFFF"
            bgColor="#0B0B94"
            onPress={() => navigation.navigate("Register")}
          />

          <View style={styles.linksContainer}>
            <Text style={styles.footerText}>
              Ao continuar, você concorda com nossos
            </Text>
            <TouchableOpacity>
              <Text style={styles.link}> Termos de Uso</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}> e </Text>

            <TouchableOpacity>
              <Text style={styles.link}>Política de Privacidade</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView >
  );
}