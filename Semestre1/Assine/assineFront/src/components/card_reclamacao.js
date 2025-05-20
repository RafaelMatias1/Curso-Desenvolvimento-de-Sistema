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
} from "react-native";
import Button from "./button";

export default  function Card ({ altura, largura, cor, titulo, descricao, endereco, post })  {




  icon = require("../image/icons/alerta_amarelo.png");
  BorderCor = "black";
  fontWeight = "normal";



  //coleta a altura e largura e verifica se foi solicitado alguma, caso nao seja ela define uma padrao
  ALTURA = altura;
  if (isNaN(ALTURA)) {
    ALTURA = 360;
  }
  LARGURA = largura;
  if (isNaN(LARGURA)) {
    LARGURA = 350;
  }

  COR = cor;
  //recebe a cor e verifica para fazer a troca do resto dos componentes

  // #FCE8CF = amarela
  //#ED0F02 = vermelha
  //#CFFFA7 = verde


  //------------------------  DEFINE OS ATRIBUTOS DOS CARDS DE ACORDO COM O CONTEUDO DA cor ------------------------------//
  if (COR != "vermelho" && COR != "vermelha" && COR != "verde") {
    COR = "#FCE8CF";
  }
  if (COR == "vermelha" || COR == "vermelho") {
    COR = "#ED0F02",
    BorderCor = "white",
    fontWeight = "bold",
    icon = require("../image/icons/alerta_vermelho.png");
  }
  if (COR == "verde") {
    COR = "#CFFFA7", icon = require("../image/icons/alerta_verde.png");
  }



  //------------------------  RETORNA  ------------------------------//
  return (
    <View
      style={[
        styles.card_reclamacao,
        { backgroundColor: COR, width: LARGURA, height: ALTURA },
      ]}
    >
      <View style={styles.titulo}>
        <View style={styles.texto_titulo}>
          <Text style={styles.titulo_reclamacao}>{titulo}</Text>
        </View>
        <View style={styles.icon_titulo}>
          <Image source={icon} style={styles.icon_alerta} />
        </View>
      </View>

      <View style={styles.meio}>
        <View style={styles.post}>
          <Image
            source={post}
            style={[styles.post_image, { borderColor: BorderCor }]}
          />
        </View>
        <ScrollView style={styles.descricao}>
          <Text style={[styles.text_descricao, { fontWeight: fontWeight }]}>
            {descricao}
          </Text>
        </ScrollView>
      </View>

      <View style={styles.campo_localizacao}>
        <Text style={[styles.endereco, { fontWeight: fontWeight }]}>
          {endereco}
        </Text>
      </View>
      <View style={styles.area_botao}>
        <Text style={[styles.descricao_botao, { fontWeight: fontWeight }]}>
          ASSINE AQUI
        </Text>
        <Button
          style={styles.botao}
          titulo="ASSINE"
          BorderCor={fontWeight}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_reclamacao: {
    borderRadius: 20,

    display: "flex",
  },

  titulo: {
    height: "20%",
    width: "100%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  texto_titulo: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 20,
  },
  titulo_reclamacao: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "5%",
  },
  icon_titulo: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 20,
  },
  icon_alerta: {
    height: 40,
    width: 40,
  },

  meio: {
    height: "52%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  post: {
    height: "100%",
    width: "60%",

    //
    justifyContent: "center",
    alignItems: "center",
    //
  },

  post_image: {
    marginLeft: 4,
    height: "94%",
    width: "96%",
    borderWidth: 3,
    borderRadius: 20,
  },

  descricao: {
    marginTop: "10%",
    height: "110%",
    width: "40%",
  },
  text_descricao: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: "5%",
  },

  campo_localizacao: {
    height: "8%",
    width: "60%",
  },
  endereco: {
    fontSize: 8,
    marginLeft: "5%",
  },

  area_botao: {
    height: "20%",
    width: "100%",
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  descricao_botao: {
    fontSize: 7,
    marginRight: "20%",
  },
});

