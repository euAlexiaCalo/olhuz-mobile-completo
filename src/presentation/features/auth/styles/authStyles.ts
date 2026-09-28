import React from "react";
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    contentContainer: {
        width: "100%",
        marginBottom: 80,
        maxWidth: 600,
        alignSelf: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        textAlign: "center",
        color: "#060A56",
        marginBottom: 20,
    },
    description: {
        textAlign: "center",
        fontSize: 18,
        lineHeight: 27,
        color: "#000",
        marginBottom: 60,
    },
    form: {
        justifyContent: "center",
        gap: 40,
        width: "100%",
    },
    footer: {
        width: "100%",
        alignItems: "center",
        marginTop: 60,
    },
});