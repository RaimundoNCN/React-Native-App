import { View, Text, StyleSheet } from "react-native";

export default function DetailsPage() {
  return (
    <View style={style.container}>
      <Text>Details Page</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
