import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";
import Card_Reclamacao from "./card_reclamacao";

const Mapa = () => {
  const [Vermelho, VermelhoV] = useState(false);
  const [Amarelo, AmareloV] = useState(false);
  const [Verde, VerdeV] = useState(false);
  
  const pingoVermelho = () => {
    VermelhoV(true);
  };
  const reclameVermelho = () => {
    VermelhoV(false);
  };
  

  const pingoAmarelo = () => {
    AmareloV(true);
  };
  const reclameAmarelo = () => {
    AmareloV(false);
  };
  

  const pingoVerde = () => {
    VerdeV(true);
  };
  const reclameVerde = () => {
    VerdeV(false);
  };
  

  // movimentação da tela
  //pega a posição atual do componente e usa ele como referencia para salvar 
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;
//-----------------------------mapo--------------------------------------------//
  return (
    <View style={{flex:0.8}}>
      
{/* ----------------------------------------------------------------------------- */}
      <Animated.View
        style={[styles.viewMeio,{ transform: [{ translateX: pan.x }, { translateY: pan.y }] },]}{...panResponder.panHandlers}>
       
       
        <Image style={styles.image} source={require("../image/teste_mapa/a.png")}/>
        <View>
          <TouchableOpacity onPress={pingoVermelho}><Image style={styles.pingo1} source={require("../image/pingos_de_localizacao/pino-de-localizacao-vermelho.png")}></Image></TouchableOpacity>

          <TouchableOpacity onPress={pingoAmarelo}><Image style={styles.pingo2}source={require("../image/pingos_de_localizacao/pino-de-localizacao-amarelo.png")}></Image></TouchableOpacity>

          <TouchableOpacity onPress={pingoVerde}><Image style={styles.pingo3}source={require("../image/pingos_de_localizacao/pino-de-localizacao-verde.png")}></Image></TouchableOpacity>
        </View>
      </Animated.View>
{/* ----------------------------------------------------------------------------- */}
{Vermelho && (
        <TouchableOpacity onPress={reclameVermelho} style={styles.modal}>
          <View style={styles.modalContent}>
            <Card_Reclamacao
              titulo="Rua Mal Feita"
              cor="vermelho"
              post={require("../image/exemplos/malfeita.jpg")}
              descricao="dsfsdf"
              endereco="Rua almerto josias- saco grande- florianopolis- SC"
            />
          </View>
        </TouchableOpacity>
      )}


{Amarelo && (
        <TouchableOpacity onPress={reclameAmarelo} style={styles.modal}>
          <View style={styles.modalContent}>
            <Card_Reclamacao
              titulo="Rua Mal Feita"
              cor="amarelo"
              post={require("../image/exemplos/malfeita.jpg")}
              descricao="dsfsdwdsdsfsdwdsadafdsfsdwdsadsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafdsfsdwdsadafadaf"
              endereco="Rua almerto josias- saco grande- florianopolis- SC"
            />
          </View>
        </TouchableOpacity>
      )}


{Verde && (
        <TouchableOpacity onPress={reclameVerde} style={styles.modal}>
          <View style={styles.modalContent}>
            <Card_Reclamacao
              titulo="Rua Mal Feita"
              cor="verde"
              post={require("../image/exemplos/malfeita.jpg")}
              descricao="dsfsdf"
              endereco="Rua almerto josias- saco grande- florianopolis- SC"
            />
          </View>
        </TouchableOpacity>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewMeio: {
    zIndex: -1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 1000,
    height: 2000,
  },

  pingo1: {
    height: 60,
    zIndex: -1,
    width: 60,
    position: "absolute",
    bottom: 950,
    left: 80,
  },
  pingo2: {
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 650,
    right:60,
  },
  pingo3: {
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 500,
  },
  modal: {
    position: "absolute",
    top:-180,
    left:30,
    flex: 1,
  
  },
   modalContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height:'100%',
    padding: 300,
    borderRadius: 8,
  },
});

export default Mapa;
