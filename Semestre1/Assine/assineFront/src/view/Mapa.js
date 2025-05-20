import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import Mapa from "../components/mapa";
 import Botao_menu_inferior from "../components/icon_inferior";

export default function VisualizarMapa(){
  return (
    <View style={styles.container}>
      <View style={styles.viewCima}>
        <Text style={{ color: "#D2B38A", fontSize: 30, fontWeight: "bold" }}>
          Assine
        </Text>
      </View>

      <View style={styles.viewMeio}>
        <Mapa />
      </View>

      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCima: {
    flex: 0.1,
    backgroundColor: "#004361",
    justifyContent: "center",
    alignItems: "center",
  },

  viewMeio: {
    zIndex: -1,
    flex: 0.9,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 200,
    width: 200,
  },

  viewBaixo: {
    flex: 0.07,
    backgroundColor: "#004361",
    flexDirection: "row",
    justifyContent: "center",
  },
});
