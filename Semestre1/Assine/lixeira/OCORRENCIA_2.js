import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Ocorrencia({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.titulo}>
        <Text style={styles.t1}>ASS AQUI</Text>
      </View>

      <View style={styles.meio}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.parte1}>
              <Text style={styles.t2}>Informe a Localização</Text>
            </View>

            {/* <View style={styles.parte2}>
              <Text style={styles.t3}>Não tem uma Conta? </Text>
              <Text
                style={styles.t4}
                onPress={() => navigation.navigate("Cadastro")}
              >
                Cadastro
              </Text>
            </View> */}

            {/* <View style={styles.parte3}>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.t5}>Fazer cadastro com o Google</Text>
              </TouchableOpacity>
            </View> */}

            {/* <View style={styles.parte4}>
              <TouchableOpacity style={styles.btn2}>
                <Text style={styles.t6}>Fazer cadastro com o Facebook</Text>
              </TouchableOpacity>
            </View> */}

            {/* <View style={styles.parte5}>
              <Text style={styles.t7}>__________</Text>
              <Text style={styles.t8}>OU</Text>
              <Text style={styles.t9}>__________</Text>
            </View> */}

            <View style={styles.parte6}>
              <TextInput
                style={styles.input}
                placeholder="Nome/Email"
              ></TextInput>
            </View>

            <View style={styles.parte6}>
              <TextInput style={styles.input} placeholder="Senha"></TextInput>
            </View>

            <View style={styles.parte6}>
              <TouchableOpacity
                style={styles.btn3}
                onPress={() => navigation.navigate("Gostou")}
              >
                <Text style={styles.t10}>CADASTRAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.parte7}>
              <Text style={styles.t11}>Esquecer a senha?</Text>
            </View>

            <View style={styles.parte8}>
              <Text style={styles.t12}>
                Ao se cadastrar ou fazer login pelo Facebook ou
              </Text>
              <Text style={styles.t12}>
                Google, você{" "}
                <Text style={{ color: "red", textDecorationLine: "underline" }}>
                  aceita os termos de uso e políticas
                </Text>{" "}
              </Text>
              <Text style={styles.t12}>
                de privacidade do{" "}
                <Text style={{ color: "#091215", fontSize: 15 }}>ASS AQUI</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>

      <View style={styles.fim}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },

  t3: {
    fontSize: 16,
  },

  t4: {
    fontSize: 17,
    color: "#ED0F02",
  },

  parte3: {
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

  t5: {
    fontSize: 16,
    color: "#FCE8CF",
  },

  parte4: {
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

  t6: {
    fontSize: 16,
    color: "#FCE8CF",
  },

  parte5: {
    height: 55,
    width: "100%",
    backgroundColor: "#BDD2DC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  t7: {
    fontSize: 30,
    marginRight: 20,
    position: "relative",
    top: "-2%",
  },

  t8: {
    fontSize: 20,
  },

  t9: {
    fontSize: 30,
    marginLeft: 20,
    position: "relative",
    top: "-2%",
  },

  parte6: {
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

  btn3: {
    height: "70%",
    width: "90%",
    backgroundColor: "#06364A",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  t10: {
    color: "#FCE8CF",
    fontSize: 16,
  },

  parte7: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  t11: {
    fontSize: 17,
    color: "#ED0F02",
  },

  parte8: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    top: 3,
  },

  t12: {
    fontSize: 14,
  },

  fim: {
    flex: 1,
    backgroundColor: "#004361",
  },
});
