import { Link } from "expo-router";
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

  function handleSubmit() {
    alt = altura / 100;
    imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("Você está abaixo do peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 26.8) {
      alert("Você está no peso ideal! " + imc.toFixed(2));
    } else if (imc >= 26.8) {
      alert("Você está acima do peso! " + imc.toFixed(2));
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputCard}>
        <Text style={styles.textDecoration}>Peso:</Text>
        <TextInput
          style={styles.inputDecoration}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          keyboardType="numeric"
          placeholder="00,00 Kg"
        />
      </View>
      <View style={styles.inputCard}>
        <Text style={styles.textDecoration}>Altura:</Text>
        <TextInput
          style={styles.inputDecoration}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          keyboardType="numeric"
          placeholder="00,00 Cm"
        />
      </View>
      <Text>*Altura deve ser em centimetros*</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
          <Link href={"/pages/details"} style={{ paddingHorizontal: 12 }}>
            <Text style={styles.textButton}>Historico</Text>
          </Link>
        </TouchableOpacity>
      </View>
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

  inputCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 330,
  },

  textDecoration: {
    textAlign: "center",

    fontSize: 24,
    fontWeight: "600",
  },

  inputDecoration: {
    border: 12,
    borderWidth: 1,
    borderRadius: 15,

    padding: 8,
    margin: 16,
    fontSize: 16,
    width: 200,
  },
  buttonStyle: {
    backgroundColor: "#2d1fee",
    border: 12,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    padding: 4,
    marginTop: 45,
    marginHorizontal: 22,
  },
  textButton: {
    color: "#fff",
    padding: 8,
    fontSize: 18,
    fontWeight: "600",
  },
});
