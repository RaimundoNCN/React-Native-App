import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function DetailsPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Galeria</Text>
        <View style={styles.images}>
          <View>
            <Image
              source={require("../../../assets/images/react-logo.png")}
              style={{ width: 180, height: 180 }}
            />
          </View>
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
          <Image
            source={require("../../../assets/images/react-logo.png")}
            style={{ width: 180, height: 180 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    padding: 8,
    fontSize: 36,
    fontWeight: "600",
  },
  images: {
    flex: 1,
    backgroundColor: "#bddfe9",
  },
});
