import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    View,
    ScrollView,
    Text,
    Platform,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../../navigation/AuthNavigator";

import { AuthBackButton } from "../../../../shared/components/AuthBackButton";
import { CustomOTPInput } from "../../../../shared/components/CustomOTPInput";
import { ButtonForm } from "../../../../shared/components/ButtonForms";

import { authStyles } from "../styles/authStyles";
import { styles } from "../styles/verifyTokenStyles";

import { useVerifyTokenViewModel } from "../viewModels/useVerifyTokenViewModel";

type Props = NativeStackScreenProps<AuthStackParamList, "VerifyToken">;

export function VerifyTokenScreen({ navigation, route }: Props) {
    const email = route.params?.email ?? "";

    const { token, isLoading, handleTokenChange, handleVerify } = useVerifyTokenViewModel(email);

    return (
        <KeyboardAvoidingView style={authStyles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

                <AuthBackButton onPress={() => navigation.goBack()} />

                <View style={authStyles.contentContainer}>
                    <View style={authStyles.content}>
                        <Text style={authStyles.title}>Verifique seu e-mail</Text>
                        <Text style={authStyles.description}>Enviamos um código para <Text style={{ fontWeight: "bold", color: "#000" }}>{email}</Text></Text>
                        <View style={authStyles.form}>
                            <CustomOTPInput
                                value={token}
                                onChangeText={handleTokenChange}
                            />
                        </View>
                        <View style={authStyles.footer}>
                            <ButtonForm
                                title="Verificar"
                                txtColor="#fff"
                                bgColor={"#208900"}
                                onPress={() => handleVerify((confirmedEmail, confirmedToken) => navigation.navigate("ResetPassword", { email: confirmedEmail, token: confirmedToken }))}
                                loading={isLoading}
                            />
                        </View>
                    </View>
                    <Text style={styles.alternative}>
                        Código não recebido?{"\n"}Reenviar código (45s)
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}