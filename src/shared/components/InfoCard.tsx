import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface InfoCardProps {
  icon?: React.ReactNode;
  description: string;
}

export const InfoCard = ({ icon, description }: InfoCardProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <View style={{ marginRight: 10 }}>
          {icon}
        </View>
      )}

      <View style={{ flex: 1 }}>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EFFC",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 480,
    borderWidth: 1,
    borderColor: "#BEC5DE",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  description: {
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    color: "#00008b",
  },
});
