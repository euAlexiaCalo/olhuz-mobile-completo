import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "stretch",
        gap: 12,
    },
    chatMessage: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 14,
        justifyContent: "flex-start",
        marginRight: 50,
    },
    chatMessageImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    chatMessageContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
    },
    chatMessageText: {
        alignSelf: "flex-start",
        fontSize: 14,
        color: "#111330",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#F5F5F5"
    },
    userMessage: {
        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "flex-start",
        marginBottom: 14,
        justifyContent: "flex-start",
        marginLeft: 50,
    },
    userMessageContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
    },
    userMessageText: {
        fontSize: 14,
        color: "#0C59D6",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#E0EBFD"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        padding: 10,
        gap: 8
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: "#1b1b1bff",
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    micIcon: {
        backgroundColor: "#0C59D6",
        borderRadius: 20,
        padding: 8,
    },
    infoText: {
        fontSize: 12,
        textAlign: "center",
        color: "#222225",
        marginTop: 4,
    },
});