import {StyleSheet} from "react-native";

export default StyleSheet.create({
  defaultContainer: {
    borderColor: "#FFFF",
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  errorContainer: {
    backgroundColor: "#F6E1E1",
    borderColor: "#F72525",
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 28,
    lineHeight: 39,
    textAlign: "center",
  },
  errorText: {
    color: "#F72525",
  },
});
