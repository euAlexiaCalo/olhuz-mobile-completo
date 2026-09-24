import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F4FD",
        alignItems: "stretch",
        paddingTop: 24,
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    header: {
        width: "100%",
        gap: 12,
        alignItems: "flex-start",
        marginBottom: 24,
        paddingHorizontal: 10,
    },
    headerContent: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        color: "#111330",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "400",
        color: "#1c40ad",
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: "#585c66",
        width: "85%",
        letterSpacing: 0.2,
        lineHeight: 22,
    },
    readingsContainer: {
        width: "100%",
        gap: 24,
        backgroundColor: "#F2F4FD",
    },
    separator: {
        height: 12,
        backgroundColor: "#F2F4FD",
        width: "100%",
    },
});