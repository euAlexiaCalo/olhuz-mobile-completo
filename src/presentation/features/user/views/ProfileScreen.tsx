import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { User, CalendarDays, Mail, Phone, FileUser, PencilLine } from 'lucide-react-native';
import { styles } from '../styles/profileStyles';
import { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../../../../navigation/AppNavigator";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from "../../../../navigation/BottomTabNavigator";

import { useProfileViewModel } from "../viewModels/useProfileViewModel";

type Props = CompositeScreenProps<BottomTabScreenProps<BottomTabParamList, "Profile">, NativeStackScreenProps<AppStackParamList>>;

export function ProfileScreen({ navigation }: Props) {
    const { 
        user, 
        isLoading, 
        isDeactivateModalVisible, 
        setDeactivateModalVisible, 
        isSignOutModalVisible, 
        setSignOutModalVisible, 
        handleDeactivateAccount, 
        handleSignOutConfirm 
    } = useProfileViewModel();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Cabeçalho do Topo */}
            <View style={styles.headerCard}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Perfil</Text>
                    <Text style={styles.headerSubTitle}>
                        Gerencie suas informações pessoais de forma segura
                    </Text>
                </View>
                
                {/* Imagem/Ícone */}
                <View style={styles.logoCircle}>
                    <Image 
                        source={require('../../../../assets/img/logo-olhuz.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <Text style={styles.mainTitle}>Informações Pessoais</Text>

            {/* Nome Completo */}
            <View style={styles.infoCard}>
                <View style={styles.iconContainer}>
                    <User size={22} color="#1D3D87" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Nome completo</Text>
                    <Text style={styles.valor}>{user?.fullName || "Não informado"}</Text>
                </View>
            </View>

            {/* E-mail */}
            <View style={styles.infoCard}>
                <View style={styles.iconContainer}>
                    <Mail size={22} color="#1D3D87" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <Text style={styles.valor}>{user?.email || "Não informado"}</Text>
                </View>
            </View>

            {/* CPF */}
            <View style={styles.infoCard}>
                <View style={styles.iconContainer}>
                    <FileUser size={22} color="#1D3D87" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>CPF</Text>
                    <Text style={styles.valor}>{user?.cpf || "Não informado"}</Text>
                </View>
            </View>

            {/* Telefone */}
            <View style={styles.infoCard}>
                <View style={styles.iconContainer}>
                    <Phone size={22} color="#1D3D87" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Telefone</Text>
                    <Text style={styles.valor}>{user?.phoneNumber || "Não informado"}</Text>
                </View>
            </View>

            {/* Data de Nascimento */}
            <View style={styles.infoCard}>
                <View style={styles.iconContainer}>
                    <CalendarDays size={22} color="#1D3D87" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Data de nascimento</Text>
                    <Text style={styles.valor}>{user?.birthDate || "Não informado"}</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => { navigation.navigate('EditProfile') }}
            >
                <PencilLine size={20} color="#fff" />
                <Text style={styles.editButtonText}>Editar dados</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}