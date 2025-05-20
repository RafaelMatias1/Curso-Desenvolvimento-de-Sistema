import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import api from "../api";
import Login from "./Login";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onRegisterPressed = async () => {
    try {
      const data = await api.post("/user/register", {
        name: name,
        email: email,
        password: password,
      });
      if (data.status === 200) {
        console.log(data);
        //alert(data.data.message);
        navigation.navigate("Login");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.titulo}>
        <Text style={styles.t1}>Assine</Text>
      </View>

      <View style={styles.meio}>
        <View style={styles.cadastro}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.parte1}>
                <Text style={styles.t2}>Cadastro</Text>
              </View>

              <View style={styles.parte2}>
                <TouchableOpacity style={styles.btn1}>
                  <Text style={styles.t3}>Fazer cadastro com o Google</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.parte3}>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={styles.t4}>Fazer cadastro com o Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.parte4}>
                <Text style={styles.t5}>__________</Text>
                <Text style={styles.t6}>OU</Text>
                <Text style={styles.t7}>_________</Text>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="name"
                  value={name}
                  onChangeText={setName}
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="Data de Nascimento"
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput style={styles.input} placeholder="CPF"></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput style={styles.input} placeholder="RG"></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar Senha"
                ></TextInput>
              </View>

              <View style={styles.parte5}>
                <TouchableOpacity
                  style={styles.btn3}
                  onPress={onRegisterPressed }
                >
                  <Text style={styles.t16}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.fim}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  titulo: {
    flex: 1,
    backgroundColor: "#004361",
    alignItems: "center",
    justifyContent: "center",
  },

  t1: {
    fontSize: 42,
    color: "#FCE8CF",
  },

  meio: {
    flex: 8,
  },

  cadastro: {
    flex: 8,
    backgroundColor: "#BDD2DC",
  },

  parte1: {
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  t2: {
    fontSize: 32,
    color: "#220003",
  },

  parte2: {
    height: 70,
    width: "100%",
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  btn1: {
    height: "75%",
    width: "90%",
    backgroundColor: "#15678B",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  t3: {
    fontSize: 16,
    color: "#FCE8CF",
  },

  parte3: {
    height: 70,
    width: "100%",
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  btn2: {
    height: "75%",
    width: "90%",
    backgroundColor: "#06364A",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  t4: {
    fontSize: 16,
    color: "#FCE8CF",
  },

  parte4: {
    height: 55,
    width: "100%",
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  t5: {
    fontSize: 30,
    marginRight: 20,
    position: "relative",
    top: "-2%",
  },

  t6: {
    fontSize: 20,
  },

  t7: {
    fontSize: 30,
    marginLeft: 20,
    position: "relative",
    top: "-2%",
  },

  parte5: {
    height: 80,
    width: "100%",
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: "75%",
    width: "88%",
    backgroundColor: "#FCE8CF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
  },

  concluir: {
    flex: 1,
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "center",
  },

  btn3: {
    height: "70%",
    width: "90%",
    backgroundColor: "#06364A",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  t16: {
    color: "#FCE8CF",
    fontSize: 16,
  },

  fim: {
    flex: 1,
    backgroundColor: "#004361",
  },
});
