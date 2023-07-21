import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Add from "../../assets/add.png";
import Logo from "../../assets/logo.png";
import { EmptyList } from "../../components/EmptyList";
import { ItemList } from "../../components/ItemList";
import { theme } from "../../global/styles";
import { styles } from "./styles";

type ItemListProps = {
  id: number;
  name: string;
  checked: boolean;
};

export function Home() {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [textInput, setTextInput] = useState("");

  const [itensList, setItensList] = useState<ItemListProps[]>([]);

  function handleAddItem() {
    if (textInput.length <= 0) {
      return Alert.alert("Alerta", "E necessário informe uma tarefa");
    }

    const id =
      itensList.reduce(
        (prev, current) => (current.id > prev ? current.id : prev),
        0
      ) + 1;

    setItensList((prev) => [
      ...prev,
      {
        id,
        name: textInput,
        checked: false,
      },
    ]);

    setTextInput("");
  }

  function handleOnChecked(id: number) {
    setItensList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDeleteItem(id: number) {
    setItensList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={Logo} style={styles.imageLogo} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={{
              ...styles.input,
              borderColor: isFocusInput
                ? theme.colors.purpleDark
                : theme.colors.gray[700],
            }}
            onFocus={() => setIsFocusInput(true)}
            onBlur={() => !textInput && setIsFocusInput(false)}
            onChangeText={setTextInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray[300]}
            value={textInput}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Image source={Add} style={styles.imageAdd} />
          </TouchableOpacity>
        </View>

        <View style={styles.results}>
          <View style={styles.result}>
            <Text style={{ ...styles.resultTitle, color: theme.colors.blue }}>
              Criadas
            </Text>
            <View style={styles.resultValueContainer}>
              <Text style={styles.resultValue}>{itensList.length}</Text>
            </View>
          </View>
          <View style={styles.result}>
            <Text style={{ ...styles.resultTitle, color: theme.colors.purple }}>
              Concluídas
            </Text>

            <View style={styles.resultValueContainer}>
              <Text style={styles.resultValue}>
                {itensList.filter((item) => item.checked).length}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          style={styles.containerList}
          data={itensList.sort((a, b) => {
            if (a.checked && !b.checked) {
              return 1;
            } else if (!a.checked && b.checked) {
              return -1;
            }

            return a.id - b.id;
          })}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ItemList
              name={item.name}
              checked={item.checked}
              onChecked={() => handleOnChecked(item.id)}
              onDelete={() => handleDeleteItem(item.id)}
            />
          )}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </>
  );
}
