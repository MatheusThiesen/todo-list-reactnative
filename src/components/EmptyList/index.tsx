import { Image, Text, View } from "react-native";
import Clipboard from "../../assets/clipboard.png";
import { styles } from "./style";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />
      <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtext}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
