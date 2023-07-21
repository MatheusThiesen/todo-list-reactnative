import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    borderTopColor: theme.colors.gray[400],
    borderTopWidth: 2,
    paddingTop: 32,
  },

  image: {
    height: 76,
    width: 76,
    marginBottom: 16,
  },
  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray[300],
  },
  subtext: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray[300],
  },
});
