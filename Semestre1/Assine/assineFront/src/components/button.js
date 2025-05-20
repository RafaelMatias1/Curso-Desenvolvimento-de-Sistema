import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ titulo, BorderCor }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[styles.text, { fontWeight: BorderCor }]}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    backgroundColor: "#E3BB87",
    textAlign: "center",
    alignItems: "center",
    width: "35%",
    flex: 0.45,
    borderRadius: 7,
    padding: 7,
  },

  text: {
    color: "#000000",
    fontSize: 13,
  },
});

export default Button;
