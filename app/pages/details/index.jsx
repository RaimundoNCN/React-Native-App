import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import "../../index";

export default function DetailsPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.images}>
          <View
            style={{
              marginTop: 16,
              borderWidth: 2,
              borderRadius: 15,
              borderColor: "black",
            }}>
            <Text
              style={{ fontSize: 38, fontWeight: "800", textAlign: "center" }}>
              {imc.toFixed(1)}
            </Text>
            <View style={{ marginTop: 8 }}>
              <Text>Peso: peso</Text>
              <Text>Altura:{alt.toFixed(2)}</Text>
            </View>
            <Text style={{ textAlign: "center", marginTop: 16 }}>
              09/09/2000
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    textAlign: "left",
    padding: 8,
    fontSize: 36,
    fontWeight: "600",
  },
  images: {
    margin: 12,
  },
});
