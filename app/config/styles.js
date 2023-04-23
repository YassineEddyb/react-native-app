import { Platform } from "react-native";
import colors from "./colors";

export default {
  textStyles: {
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "roboto" : "avenir",
    fontWeight: 500,
  },
};
