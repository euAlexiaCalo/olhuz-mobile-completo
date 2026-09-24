import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones padrão do Expo

import { HomeScreen } from '../presentation/features/home/views/HomeScreen';
import { ProfileScreen } from '../presentation/features/user/views/ProfileScreen';
import { PreferencesScreen } from '../presentation/features/preferences/views/PreferencesScreen';
import { ReadingsHistoryScreen } from '../presentation/features/reading/views/ReadingsHistoryScreen';

export type BottomTabParamList = {
    Home: undefined;
    Readings: undefined;
    Preferences: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                // Cores dos ícones e textos
                tabBarActiveTintColor: '#1c3885', // Cor principal do app quando a aba está ativa
                tabBarInactiveTintColor: '#64748B', // Cor quando está inativa
                
                // Estilo geral da barra (fundo, altura, espaçamento)
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E2E8F0',
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                
                // Estilo da fonte dos nomes
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                
                // Lógica para trocar o ícone dependendo da rota atual
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    if (route.name === 'Home') {
                        // Mostra o ícone preenchido se estiver focado, ou contornado se inativo
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Readings') {
                        iconName = focused ? 'book' : 'book-outline'; 
                    } else if (route.name === 'Preferences') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // Renderiza o ícone passando a cor gerenciada automaticamente pelo navigator
                    return <Ionicons name={iconName} size={size + 4} color={color} />;
                },
            })}
        >
            {/* O tabBarLabel sobrepõe o nome real da rota na interface de usuário */}
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ tabBarLabel: 'Início' }} 
            />
            <Tab.Screen 
                name="Readings" 
                component={ReadingsHistoryScreen} 
                options={{ tabBarLabel: 'Leituras' }} 
            />
            <Tab.Screen 
                name="Preferences" 
                component={PreferencesScreen} 
                options={{ tabBarLabel: 'Configurações' }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ tabBarLabel: 'Perfil' }} 
            />
        </Tab.Navigator>
    );
}