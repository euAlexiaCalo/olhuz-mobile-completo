import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface CustomOTPInputProps {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  length?: number;
}

export const CustomOTPInput = ({
  label = "Código de verificação",
  value,
  onChangeText,
  length = 6,
}: CustomOTPInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      {/* Container que agrupa os quadrados e o input invisível */}
      <View style={styles.inputWrapper}>
        <View style={styles.boxesContainer}>
          {Array(length)
            .fill(0)
            .map((_, index) => {
              const digit = value[index] || "";
              // Destaca a caixa atual (se não passou do limite)
              const isFocused = value.length === index; 

              return (
                <View
                  key={index}
                  style={[styles.box, isFocused && styles.boxFocused]}
                >
                  <Text style={styles.text}>{digit}</Text>
                </View>
              );
            })}
        </View>

        {/* Input real esticado por cima de todos os quadrados */}
        <TextInput
          value={value}
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9]/g, "");
            onChangeText(numericValue);
          }}
          maxLength={length}
          keyboardType="numeric"
          autoFocus={true}
          style={styles.hiddenInput}
          caretHidden={true} // Esconde o cursor piscante
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#060A56",
    marginBottom: 8,
    fontWeight: "500",
    marginLeft: 4,
  },
  inputWrapper: {
    position: "relative",
  },
  boxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  box: {
    width: 48,
    height: 52,
    borderWidth: 1,
    borderColor: "#060A56", 
    borderRadius: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  boxFocused: {
    borderColor: "#A984D5", 
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#060A56",
  },
  hiddenInput: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    color: "transparent",
  },
});