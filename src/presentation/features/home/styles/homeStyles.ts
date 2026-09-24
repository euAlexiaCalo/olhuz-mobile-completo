import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 24,
        paddingBottom: 80
    },
    header: {
        gap: 12,
        maxWidth: "86%",
        marginBottom: 48
    },
    title: {
        fontSize: 26,
        fontWeight: "500",
        color: "#111330",
    },
    name: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111330",
    },
    description: {
        fontSize: 16,
        color: "#585c66",
        letterSpacing: 0.2,
        lineHeight: 22,
    },
    cardContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 40
    },
    infoContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24
    },
});