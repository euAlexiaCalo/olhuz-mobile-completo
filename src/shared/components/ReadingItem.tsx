import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { File, ChevronRight } from "lucide-react-native";

interface ReadingItemProps {
  onPress: () => void;
  type: string;
  title: string;
  uploadDate: string;
  descriptionText?: string;
}

export const ReadingItem = ({ onPress, type, title, uploadDate, descriptionText }: ReadingItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.iconContainer}>
          <File size={46} color="#00008B" strokeWidth={1.4} />
        </View>
        <View style={styles.content}>
          <Text style={styles.type}>{type}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
          <Text style={styles.date}>{uploadDate}</Text>
        </View>
      </View>
      <ChevronRight size={36} color="#00008B" strokeWidth={1.6} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: "#E8EFFC",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 8,
  },
  type: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#1c40ad",
    backgroundColor: "#E8EFFC",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111330",
  },
  date: {
    fontSize: 15,
    color: "#464646",
  },
});
