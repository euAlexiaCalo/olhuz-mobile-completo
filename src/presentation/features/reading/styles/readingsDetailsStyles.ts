import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 12,
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 20,
    zIndex: 1,
    backgroundColor: "#F6F6F7",
    borderRadius: "50%",
    padding: 6,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#111330",
    marginBottom: 22,
  },
  readingDetailsHeader: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    padding: 10,
    gap: 16,
  },
  imageContainer: {
    width: 96,
    height: 96,
    borderRadius: 5,
    overflow: "hidden",
    resizeMode: "cover",
  },
  image: {
    width: 120,
    height: 96,
    marginLeft: -24,
  },
  readingDetailsInfo: {
    gap: 8,
    flex: 1,
  },
  readingDetailsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  readingDetailsInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  readingDetailsInfoText: {
    fontSize: 15,
    color: "#56595C",
  },
  fileTypeRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
  },
  fileTypeText: {
    fontSize: 14,
    color: "#0B0B0B",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  closeModalButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 8,
  },
});