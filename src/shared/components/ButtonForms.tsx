import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from "react-native";

interface ButtonFormProps {
  icon?: React.ReactNode;
  title: string;
  txtColor: string;
  bgColor: string;
  borderColor?: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const ButtonForm = ({
  icon,
  title,
  txtColor,
  bgColor,
  borderColor,
  onPress,
  disabled = false,
  loading = false,
}: ButtonFormProps) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={[styles.btn, { backgroundColor: bgColor, borderColor: borderColor, borderWidth: borderColor ? 1 : 0 }, isDisabled && styles.disabled,]}
      onPress={onPress}
    >
      <View style={styles.btnContent}>
        {loading ? (
          <ActivityIndicator size="small" color={txtColor} />
        ) : (
          <>
            {/* Se houver icone, exibe o container com as estilizações*/}
            {icon &&
              <View style={styles.iconContainer}>
                {icon}
              </View>
            }
            <Text style={[styles.btnTitle, { color: txtColor }]}>{title}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    width: "80%",
    height: 58,
    borderRadius: 30,
    maxWidth: 400,
    alignItems: "center",
  },
  btnContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 138,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  btnTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  disabled: {
    opacity: 0.6,
  },
});
