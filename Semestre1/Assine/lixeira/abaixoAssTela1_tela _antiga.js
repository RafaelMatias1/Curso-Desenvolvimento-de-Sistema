import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function AbaixoAssinato_antigo() {
  return (
    <View style={styles.container}>
      <View style={styles.cima}>
        <Text style={styles.Titulo}>ABAIXO-ASSINADO</Text>
      </View>

      <View style={styles.meio}>
        <View style={styles.meio_div_cima}>
          <View style={styles.div_titulo}>
            <Text style={styles.Titulo}>Titulo da Rua</Text>
          </View>
          <View style={styles.div_dentro}>
            <View style={styles.div_imagem}>
              <Image
                style={styles.logo1}
                source={{
                  uri: "https://blog.laredo.com.br/wp-content/uploads/2022/09/post_thumbnail-00e5da669e546b308b7fb7c0fdec422a-1080x720.jpeg",
                }}
              />
            </View>
            <View style={styles.div_texto}>
              <Text>Descrição/Motivos</Text>
            </View>
          </View>
        </View>
        <View style={styles.baixo_div_baixo}>
          <View style={styles.dentro_div_baixo}>
            <TouchableOpacity
              onPress={() => {
                /* do this */
              }}
            >
              <View
                style={{
                  backgroundColor: "#E3BB87",

                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 300,
                  borderRadius: 50,
                }}
              >
                <Text style={{ color: "white" }}>
                  Confirmar para ir cadastrar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cima: {
    backgroundColor: "#004361",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    display: "flex",
    color: "#D2B38A",
    fontSize: 40,
  },
  meio: {
    backgroundColor: "#BDD2DC",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  meio_div_cima: {
    backgroundColor: "#FCE8CF",
    width: "80%",
    height: "70%",
    borderRadius: 25,
    margin: "2%",
  },
  div_titulo: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  div_dentro: {
    width: "90%",
    height: "70%",
    margin: "5%",
    flexDirection: "row",
    borderRadius: 25,
  },
  div_imagem: {
    width: "50%",
    height: "60%",
  },
  div_texto: {
    width: "50%",
    height: "100%",
    alignItems: "center",
  },
  baixo_div_baixo: {
    backgroundColor: "#FCE8CF",
    width: "80%",
    height: "20%",
    borderRadius: 25,
    margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  dentro_div_baixo: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  baixo: {
    backgroundColor: "#004361",
    width: "100%",
    height: "9%",
    justifyContent: "center",
  },
  logo1: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  Bottao: {
    backgroundColor: "#220003",
    width: "18%",
    height: "90%",
    borderRadius: 50,
    margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  Dentro_Bottao: {
    width: "65%",
    height: "66%",
  },
});
