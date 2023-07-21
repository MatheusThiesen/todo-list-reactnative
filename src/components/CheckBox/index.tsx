import { Image, TouchableOpacity } from "react-native";
import Marker from "../../assets/marker.png";
import { theme } from "../../global/styles";
import { styles } from "./styles";

interface CheckBoxProps {
  checked: boolean;
  onChecked?: () => void;
}

export function CheckBox({ checked, onChecked }: CheckBoxProps) {
  return (
    <TouchableOpacity
      onPress={onChecked}
      style={{
        ...styles.container,
        backgroundColor: checked ? theme.colors.blueDark : "transparent",
        borderColor: checked ? theme.colors.blueDark : theme.colors.blue,
      }}
    >
      {checked && <Image source={Marker} style={styles.marker} />}
    </TouchableOpacity>
  );
}
