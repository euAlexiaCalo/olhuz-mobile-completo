import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../core/contexts/AuthContext';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

// ================================================
// MOCK DA TELA DE SPLASH
// ================================================
const SplashScreen = () => (
    <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Olhuz</Text>
        <ActivityIndicator size="large" color="#6ccbf7ff" />
    </View>
);

export const RootNavigator = () => {
    // Verifica se o usuário está autenticado
    const { isAuthenticated, isLoading } = useAuth();

    // Mostra a tela de splash enquanto o autenticador estiver carregando
    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            {/* Se o usuário estiver autenticado, mostra o fluxo privado, caso contrário, mostra o fluxo público */}
            {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2acac',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});