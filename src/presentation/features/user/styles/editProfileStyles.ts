import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    marginTop: 150,
  },

  scrollContainer: {
    padding: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1D3D87",
    marginBottom: 20,
  },

  fieldContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#EEF3FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,
  },

  label: {
    fontSize: 13,
    color: "#7A7A7A",
    marginBottom: 6,
  },

  input: {
    height: 44,

    borderWidth: 1,
    borderColor: "#D9DFEA",

    borderRadius: 6,

    paddingHorizontal: 12,

    fontSize: 14,

    color: "#333",

    backgroundColor: "#FFF",
  },

  inputDisabled: {
    backgroundColor: "#F5F6F8",
    color: "#7A7A7A",
  },
 buttonContainer: {
  marginTop: 20,
  backgroundColor: "#1D3D87",
  borderRadius: 6,
  padding: 15,
  alignItems: "center",
  

},

buttonText: {
  color: "#FFF",
  fontSize: 16,
  fontWeight: "bold",
},
cancelButton: {
  marginTop: 15,
  borderWidth: 1,
  borderColor: "#A0A0A0",
  borderRadius: 25,
  paddingVertical: 15,
  alignItems: "center",
  backgroundColor: "#FFFFFF",
},

cancelButtonText: {
  color: "#1D2D7A",
  fontSize: 16,
  fontWeight: "600",
},
});