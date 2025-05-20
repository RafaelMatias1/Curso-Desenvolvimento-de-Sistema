import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ProgressBarAndroid,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function Reclamacao() {
  return (
    <View style={styles.container}>
      <View style={styles.Div_cima}>
        <Text style={styles.Titulo}>Assine</Text>
      </View>
        <View style={styles.cima}>
          <Text style={styles.Titulo3}>verifique as informações</Text>
        </View>
        <View style={styles.meio}>

        <View style={styles.Tela1}>
                      <View style={styles.titulo_problema}>
                          <Text style={styles.Titulo2}>Buraco Gigante</Text>
                      </View>

                      <ScrollView>

                        <View style={styles.teste}>
                              <View style={styles.Tela_Um_Meio_Cima}>
                                  <Image style={styles.logo1}source={{uri: "https://www.jornalcruzeiro.com.br/_midias/jpg/2021/12/23/buraco_na_rua-831589.jpg",}}/>
                              </View>
                              <Text style={styles.Tela_Um_Meio_abaixo}>
                                Locarização: Rua São Pedro,Areais,São José
                              </Text>
                              <Text style={styles.Tela_Um_Meio_abaixo}>
                                fulanosadasd
                              </Text>
                              <Text style={styles.Tela_Um_Meio_abaixo2}>
                                  Digite ou cole seu texto aqui
                              </Text>
                        </View>

                      </ScrollView>
                </View>  

        </View>
        <View style={styles.baixo}>
        <TouchableOpacity style={styles.botao1}><Text>Voltar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao2}><Text>Compartilhar</Text></TouchableOpacity>
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
  Div_cima: {
    backgroundColor: "#004361",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    color: "#D2B38A",
    fontSize: 50,
  },

  cima: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
    Titulo3: {
    color: "black",
    fontSize: 30,
  },
  meio: {
    width: "100%",
    height: "70%",  
  },
  Tela1: {
    backgroundColor: "#FCE8CF",
    borderRadius: 20,
    width: "90%",
    height: '80%',
    margin:20,
  },
  titulo_problema: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo2: {
    color: "#D2B38A",
    fontSize: 30,
    
  },
  teste: {
    alignItems: 'center', 
    justifyContent: 'center',
    margin:6,
  },
  Tela_Um_Meio_Cima: {
    width: 360,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo1: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  Tela_Um_Meio_abaixo: {
    width: "100%",
  },
  Tela_Um_Meio_abaixo2: {
    width: "100%",
    margin:10,
  },
  baixo: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  botao1: {
    width: "40%",
    height: "50%",
    backgroundColor:'#15678B',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin:10,
  },
  botao2: {
    width: "40%",
    height: "50%",
    backgroundColor:'#33AB4E',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
