import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import  styles  from "./StyleSheet/PerfilStyle";

export default function PerfilRead() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.t1}>PERFIL</Text>
      </View>

      <View style={styles.meio}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.espacamento}></View>

            <View style={styles.parte1}>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.t2}>DADOS GERAIS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.parte2}>
              <TouchableOpacity style={styles.btn2}>
                <Text style={styles.t3}>CONTATO</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.parte3}>
              <TouchableOpacity style={styles.btn3}>
                <Text style={styles.t4}>SENHA E EMAIL</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.espacamento1}></View>

            <View style={styles.porcao1}>
              <View style={styles.espacamento2}></View>
              <View style={styles.subtitulo}>
                <Text style={styles.t5}>CPF</Text>
              </View>
            </View>

            <View style={styles.parte4}>
              <TextInput style={styles.input1}></TextInput>
            </View>

            <View style={styles.espacamento3}></View>

            <View style={styles.porcao1}>
              <View style={styles.espacamento2}></View>
              <View style={styles.subtitulo}>
                <Text style={styles.t5}>RG</Text>
              </View>
            </View>

            <View style={styles.parte4}>
              <TextInput style={styles.input1}></TextInput>
            </View>

            <View style={styles.espacamento3}></View>

            <View style={styles.porcao1}>
              <View style={styles.espacamento2}></View>
              <View style={styles.subtitulo}>
                <Text style={styles.t5}>Nascimento</Text>
              </View>
            </View>

            <View style={styles.parte4}>
              <TextInput style={styles.input1}></TextInput>
            </View>

            <View style={styles.espacamento3}></View>

            <View style={styles.parte3}>
              <TouchableOpacity style={styles.btn3}>
                <Text style={styles.t8}> EDITAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.espacamento3}></View>
          </ScrollView>
        </SafeAreaView>
      </View>

     
    </View>
  );
}