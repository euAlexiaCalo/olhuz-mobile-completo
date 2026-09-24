import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FF",
    padding: 25,
    justifyContent: "center",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
  },

  backText: {
    fontSize: 32,
    color: "#1A237E",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#1A237E",
  },

  email: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 25,
    color: "#555",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },

  botao: {
    backgroundColor: "#1E9B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});