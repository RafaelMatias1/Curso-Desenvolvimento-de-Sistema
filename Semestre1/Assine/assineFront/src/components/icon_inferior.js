import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Button from "./button";

const Botao_menu_inferior = ({ simbolo }) => {
  figura = require("../image/icons/estrela.png");
  if (simbolo == "perigo") {
    figura = require("../image/icons/alerta.png");
  }
  if (simbolo == "estrela") {
    figura = require("../image/icons/estrela.png");
  }
  if (simbolo == "calendario") {
    figura = require("../image/icons/calendario.png");
  }
  if (simbolo == "localizacao") {
    figura = require("../image/icons/localizacao.png");
  }

  return (
    <TouchableOpacity style={styles.poligono}>
      <Image
        style={styles.icon}
        source={require("../image/icons/poligono.png")}
      ></Image>

      <Image style={styles.icon_meio} source={figura} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  icon_meio: {
    height: 60,
    width: 60,
    position: "relative",
    bottom: 70,
  },
  poligono: {
    height: 80,
    width: 80,

    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 8,
  },
});

export default Botao_menu_inferior;
