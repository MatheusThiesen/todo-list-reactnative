import { Image, Text, TouchableOpacity, View } from "react-native";
import Trash from "../../assets/trash.png";
import { theme } from "../../global/styles";
import { CheckBox } from "../CheckBox";
import { styles } from "./style";

interface ItemListProps {
  name: string;
  checked: boolean;
  onChecked: () => void;
  onDelete: () => void;
}

export function ItemList({
  name,
  checked,
  onChecked,
  onDelete,
}: ItemListProps) {
  return (
    <View style={styles.container}>
      <CheckBox checked={checked} onChecked={() => onChecked()} />
      <Text
        style={{
          ...styles.name,
          textDecorationLine: checked ? "line-through" : "none",
          color: checked ? theme.colors.gray[300] : theme.colors.gray[100],
        }}
      >
        {name}
      </Text>
      <TouchableOpacity style={styles.trashButton} onPress={onDelete}>
        <Image style={styles.trashImage} source={Trash} />
      </TouchableOpacity>
    </View>
  );
}
