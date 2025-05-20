import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ProgressBarAndroid,
} from "react-native";

export default function Telainicial() {
  return (
    <View style={styles.container}>
      <View style={styles.Div_Alta}>
        <Text style={styles.Titulo}>ASS Aqui</Text>
      </View>

      <View style={styles.Div_Meio}>
        <View style={styles.Informação}>
          <View style={styles.Tela_Um}>
            <View style={styles.Tela_Um_Cima}>
              <Text style={styles.Titulo2}>Buraco Na Pista</Text>
            </View>
            <View style={styles.Tela_Um_Meio}>
              <View style={styles.Tela_Um_Meio_Esquerda}>
                <Image
                  style={styles.logo1}
                  source={{
                    uri: "https://www.jornalcruzeiro.com.br/_midias/jpg/2021/12/23/buraco_na_rua-831589.jpg",
                  }}
                />
              </View>
              <View style={styles.Tela_Um_Meio_Direita}>
                <Text>Texto</Text>
                <Text>
                  ---------------------------------------------------------------------------------------------------------
                </Text>
              </View>
            </View>
            <View style={styles.Tela_Um_Meio_baixo}>
              {/* <View style={styles.Tela_Um_M_baixo_esquerda}>
                <Text>progresso</Text>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.5}
                  </View>
                /> */}
            </View>
          </View>
          <View style={styles.Tela_Dois}>
            <View style={styles.Tela_Dois_Esquerda}>
              <Image
                style={styles.logo2}
                source={{
                  uri: "https://s3.static.brasilescola.uol.com.br/be/2022/09/abaixo-assinado.jpg",
                }}
              />
            </View>
            <View style={styles.Tela_Dois_Direita}>
              <Text>Texto</Text>
              <Text>
                ---------------------------------------------------------------------------------------------------------
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BDD2DC",
    width: "100%",
    height: "100%",
  },
  Div_Alta: {
    backgroundColor: "#004361",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    display: "flex",
    color: "#D2B38A",
    fontSize: 50,
  },
  Div_Meio: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Informação: {
    width: "80%",
    height: "70%",
    justifyContent: "space-evenly",
  },
  Tela_Um: {
    backgroundColor: "#FCE8CF",
    borderRadius: 20,
    width: "100%",
    height: "60%",
  },
  Tela_Um_Cima: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  Titulo2: {
    display: "flex",
    color: "black",
    fontSize: 25,
  },
  Tela_Um_Meio: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Tela_Um_Meio_Direita: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    margin: "5%",
  },
  Tela_Um_Meio_Esquerda: {
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    borderRadius: 20,
  },
  logo1: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  Tela_Um_Meio_baixo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  Tela_Um_M_baixo_esquerda: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Tela_Um_M_baixo_direito: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Tela_Dois: {
    display: "flax",
    backgroundColor: "#FCE8CF",
    borderRadius: 20,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Tela_Dois_Direita: {
    alignItems: "center",
    width: "50%",
    height: "100%",
    borderRadius: 20,
    margin: 5,
  },
  Tela_Dois_Esquerda: {
    width: "40%",
    height: "90%",
    borderRadius: 20,
    margin: 2,
  },
  logo2: {
    width: "100%",
    height: "100%",
  },
  Div_Baixa: {
    backgroundColor: "#004361",
    width: "100%",
    height: "9%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: "60%",
    height: "55%",
  },
});
