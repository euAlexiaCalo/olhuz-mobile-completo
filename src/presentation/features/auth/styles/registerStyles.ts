import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
  },
passwordStrength: {
  flexDirection: "row",
  marginTop: 8,
  justifyContent: "space-between",
},

strengthBar: {
  flex: 1,
  height: 6,
  borderRadius: 3,
  marginHorizontal: 2,
},

strengthText: {
  marginTop: 5,
  color: "#555",
  fontSize: 12,
},
  back: {
    fontSize: 30,
    color: "#0B166D",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#0B166D",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    borderBlockColor: "#0B166D",
    textShadowColor: "#0B166D",
    fontSize: 16,
    fontWeight: "500",
    color: "#0B166D",
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1.5,
    alignContent: "center",
    borderColor: "#0B166D",
    backgroundColor: "#e4e4e4ff",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
  },

  checkArea: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },

  termos: {
    flex: 1,
    marginLeft: 10,
    color: "#555",
  },

  btn: {
  backgroundColor: "#0B166D",
  marginTop: 40,
  height: 55,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
},

  txtBtn: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
    alignContent : "center",
  },
});