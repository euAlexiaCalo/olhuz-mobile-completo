// Contém o fluxo das rotas para os usuários logados
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import { EditProfileScreen } from '../presentation/features/user/views/EditProfileScreen';
import { ReadingHistoryDto } from '../presentation/features/reading/types/readingModels';
import { ReadingDetailsScreen } from '../presentation/features/reading/views/ReadingDetailsScreen';

// ================================================
// MOCKS DAS TELAS SECUNDÁRIAS PRIVADAS
// ================================================
// const ReadingDetailsScreen = () => <View><Text>Leitura Individual</Text></View>;
// const EditProfileScreen = () => <View><Text>Editar Perfil</Text></View>;
const ChangePasswordScreen = () => <View><Text>Alterar Senha</Text></View>;

// ================================================
// TIPAGEM DA PILHA PRIVADA
// ================================================
export type AppStackParamList = {
    BottomTabs: undefined;
    ReadingDetails: { item: ReadingHistoryDto };
    EditProfile: undefined;
    ChangePassword: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
            initialRouteName="BottomTabs"
        >
            <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
            <Stack.Screen name="ReadingDetails" component={ReadingDetailsScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        </Stack.Navigator>
    );
};