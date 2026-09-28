import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5FC",
    justifyContent: "space-between",
    paddingTop: 40,
  },

  bgPart1: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  bgPart2: {
    position: "absolute",
    top: "50%",
    left: 0,
  },

  bgPart3: {
    position: "absolute",
    top: "16%",
    right: 0,
  },

  bgPart4: {
    position: "absolute",
    top: "60%",
    right: 0,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  logo: {
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "600",
    color: "#060A56",
    textAlign: "center",
    letterSpacing: 1.0,
    width: "90%",
    maxWidth: 500,
    marginBottom: 30,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#505050",
    width: "90%",
    maxWidth: 500,
    lineHeight: 20,
    letterSpacing: 0.6,
    marginBottom: 40,
  },

  bottomContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 32,
    paddingVertical: 60,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 40,
  },

  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    width: "80%",
    maxWidth: 400,
  },

  line: {
    flex: 1,
    height: 1,
    width: "100%",
    backgroundColor: "#A4A4A4",
  },

  separatorText: {
    marginHorizontal: 12,
    color: "#464646",
    fontSize: 16,
  },

  linksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 30,
  },

  footerText: {
    textAlign: "center",
    color: "#777",
    fontSize: 15,
  },

  link: {
    color: "#3366FF",
    fontSize: 15,
  },
});
