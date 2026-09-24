import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, Icon } from "lucide-react-native";

interface ButtonCardProps {
  IconComponent: React.ComponentType<{ size: number; color: string }>;
  iconColor: string;
  title: string;
  description: string;
  bgColorOne: string;
  bgColorTwo: string;
  onPress: () => void;
}

export const ButtonCard = ({
  IconComponent,
  iconColor,
  title,
  description,
  bgColorOne,
  bgColorTwo,
  onPress,
}: ButtonCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onPress}>
      <LinearGradient
        colors={[bgColorOne, bgColorTwo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradientFill, { borderColor: iconColor }]}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <IconComponent size={50} color={iconColor} />
            </View>
            <View style={styles.txtContainer}>
              <Text style={styles.btnTitle}>{title}</Text>
              <Text style={styles.btnDescription}>{description}</Text>
            </View>
          </View>
          <View style={styles.bgArrow}>
            <ArrowRight size={28} color="#111330" />
          </View>
        </View>
      </LinearGradient>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    maxWidth: 600,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  gradientFill: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
  },
  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    position: "relative",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: "#FFF",
    borderRadius: "50%",
    padding: 12,
  },
  txtContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 6,
    flexShrink: 1,
  },
  btnTitle: {
    color: "#111330",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnDescription: {
    color: "#464646",
    fontSize: 18,
  },
  bgArrow: {
    position: "absolute",
    bottom: 14,
    right: 14,
    backgroundColor: "#FFF",
    borderRadius: "50%",
    padding: 4,
  },
});
