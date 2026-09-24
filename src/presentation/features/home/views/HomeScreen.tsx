import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../../../navigation/AppNavigator";
import { BottomTabParamList } from "../../../navigation/BottomTabNavigator";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ButtonCard } from "../../../shared/components/ButtonCard";
import { styles } from "../styles/homeStyles";

import { Aperture, ImageUp, ShieldCheck } from "lucide-react-native";
import { InfoCard } from "../../../shared/components/InfoCard";
import { useHomeViewModel } from "../viewModel/useHomeViewModel";

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>;

export function HomeScreen({ navigation }: Props) {
    const { firstName, isLoading, handleTakePhoto, handleOpenFile } = useHomeViewModel();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F2F4FD" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Olá,
                        <Text style={styles.name}> {firstName}</Text>
                    </Text>
                    <Text style={styles.description}>
                        Selecione uma das opções abaixo para começar
                    </Text>
                </View>

                {/* Exibe um indicador de carregamento enquanto a IA processa o arquivo */}
                {isLoading ? (
                    <View style={{ flex:1, width: "100%", alignItems: "center", justifyContent: "center", gap: 12 }}>
                        <ActivityIndicator size="large" color="#0C59D6" />
                        <Text style={{ fontSize: 16, color: "#1c40ad", fontWeight: "600", textAlign: "center" }}>
                            Analisando arquivo com a IA...
                        </Text>
                    </View>
                ) : (
                    <View style={styles.cardContainer}>
                        <ButtonCard
                            IconComponent={Aperture}
                            iconColor="#FFCC26"
                            title="Tirar foto"
                            description="Abra a câmera e capture sua imagem."
                            bgColorOne="#ffeab4ff"
                            bgColorTwo="#FFDF86"
                            onPress={() =>
                                handleTakePhoto((params) => navigation.navigate("ReadingDetails", params))
                            }
                        />

                        <ButtonCard
                            IconComponent={ImageUp}
                            iconColor="#4ABE66"
                            title="Escolher arquivo"
                            description="Selecione um arquivo."
                            bgColorOne="#B4EDBD"
                            bgColorTwo="#58EA6F"
                            onPress={() =>
                                handleOpenFile((params) => navigation.navigate("ReadingDetails", params))
                            }
                        />
                    </View>
                )}

                <View style={styles.infoContainer}>
                    <InfoCard 
                        icon={<ShieldCheck size={36} color={"#00008b"} strokeWidth={1.6} />} 
                        description="Suas imagens são processadas com segurança e privacidade." 
                    />
                </View>
            </View>
        </ScrollView>
    );
}