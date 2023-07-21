import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.gray[700],
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    backgroundColor: theme.colors.gray[600],
    paddingTop: 52,
    paddingHorizontal: 16,
  },
  imageLogo: {
    height: 32,
    width: 110,
  },
  imageAdd: {
    height: 18,
    width: 18,
  },

  form: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    top: -26,
    height: 52,
  },
  input: {
    flex: 1,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: theme.colors.gray[500],
    color: theme.colors.gray[100],
    fontFamily: theme.fonts.regular,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blueDark,
    height: 52,
    width: 52,
    borderRadius: 6,
    marginLeft: 8,
  },

  results: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  result: {
    flexDirection: "row",
  },
  resultTitle: {
    fontFamily: theme.fonts.bold,
  },

  resultValueContainer: {
    backgroundColor: theme.colors.gray[400],
    borderRadius: 8,
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },

  resultValue: {
    color: theme.colors.gray[200],
    fontFamily: theme.fonts.bold,
  },

  containerList: {
    flex: 1,
    width: "100%",
  },
});
