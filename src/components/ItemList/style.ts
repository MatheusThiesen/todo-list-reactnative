import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.gray[500],
    borderColor: theme.colors.gray[400],
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 18,
  },
  trashImage: {
    height: 20,
    width: 18,
  },
  trashButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
