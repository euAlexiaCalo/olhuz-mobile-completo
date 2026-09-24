import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
  },

  back: {
    marginTop: 50,
  },

  backText: {
    fontSize: 30,
    color: "#1A237E",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1A237E",
    textAlign: "center",
    marginTop: 15,
  },

  form: {
    marginTop: 90,
  },

  label: {
    color: "#1A237E",
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 5,
  },

  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: "#1A237E",
    borderRadius: 30,
    paddingHorizontal: 18,
    backgroundColor: "#EFEFEF",
    marginBottom: 18,
    fontSize: 16,
  },

  esqueci: {
    textAlign: "center",
    color: "#4E7BFF",
    fontSize: 19,
    marginTop: 130,
  },

  link: {
    textAlign: "right",
    color: "#4E7BFF",
    fontSize: 17,
    marginTop: 15,
  },

  btnEntrar: {
    marginTop: -100,
    height: 55,
    backgroundColor: "#1E9B00",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
   alignContent: "center",
  },

  txtBtn: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 22,
    alignContent: "center",
    marginLeft: 10,
  },
});