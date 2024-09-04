import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleSubmit = () => {
    alert(`Teste ${peso}, ${altura}`);
  };

  return (
    <View style={styles.container}>
      <Text>Peso:</Text>
      <TextInput
        style={styles.inputDecoration}
        value={peso}
        onChange={(peso) => setPeso(peso)}
        keyboardType="numeric"
        placeholder="00,00 Kg"
      />
      <Text>Altura em centimetros:</Text>
      <TextInput
        style={styles.inputDecoration}
        value={altura}
        onChange={(altura) => setAltura(altura)}
        keyboardType="numeric"
        placeholder="00,00 Cm"
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputDecoration: {
    border: 12,
    borderWidth: 1,
    borderRadius: 15,

    padding: 8,
    margin: 16,
    fontSize: 16,

    width: 250,
  },
  buttonStyle: {
    backgroundColor: "#2d1fee",
    border: 12,
    borderWidth: 1,
    borderRadius: 15,

    padding: 4,
    margin: 15,
  },
  textButton: {
    color: "#fff",
    padding: 8,
    fontSize: 18,
    fontWeight: "600",
  },
});
