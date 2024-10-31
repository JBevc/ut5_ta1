import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(1);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function disminuirContador() {
    setContador(contador - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.text}>{contador}</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonBackground}>
          <Button
            title="disminuir"
            color="white"
            onPress={() => disminuirContador()}
          />
        </View>
        <View style={styles.buttonBackground}>
          <Button
            title="aumentar"
            backgroundColor="white"
            color="white"
            onPress={() => aumentarContador()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52796f",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
    color: "white",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 30,
    color: "white",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    alignContent: "center",
  },
  buttonBackground: {
    backgroundColor: "#354f52",
    borderRadius: 15,
    padding: 10,
    margin: 15,
    opacity: 60,
  },
});
