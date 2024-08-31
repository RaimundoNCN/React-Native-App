import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function AppInit() {
  return (
    <View style={style.container}>
      <Text>App Init</Text>
      <Link
        href={"/pages/details"}
        style={{ textDecorationLine: "underline", }}
      >
        Tela de detalhes
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
});
