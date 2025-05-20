/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ProgressBarAndroid, NavigationContainer } from 'react-native';


export default function telainicial() {
  return (
    <View style={styles.container}>

      <View style={styles.Div_Alta}>
        <Text style={styles.Titulo}>ASS Aqui</Text>
      </View>

       <View style={styles.Div_Meio}>
        <View style={styles.Informação}>
          <View style={styles.Tela_Um}>
              <View style={styles.Tela_Um_Cima}><Text style={styles.Titulo2}>Buraco Na Pista</Text></View>
              <View style={styles.Tela_Um_Meio}>
                <View style={styles.Tela_Um_Meio_Esquerda}>
                <Image style={styles.logo1} source={{uri: 'https://www.jornalcruzeiro.com.br/_midias/jpg/2021/12/23/buraco_na_rua-831589.jpg',}}/>
                </View>
                <View style={styles.Tela_Um_Meio_Direita}>
                    <View style={styles.info_cima}>
                        <Text>Buraco Gigante</Text>
                        <Text>Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.</Text>
                    </View>
                    <View style={styles.info_baixo}>
                        <Text>Locarização: Rua São Pedro,Areais,São José</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.Tela_Um_Meio_baixo}>
                <View style={styles.Tela_Um_M_baixo_esquerda}>
                  <Text>progresso</Text>
                  <View style={styles.barraProgress}>
                    <View style={styles.barraProgressP}>

                    </View>
                  </View>

                </View>
                <View style={styles.Tela_Um_M_baixo_direito}>
                  <TouchableOpacity onPress={() => }}>
                    <View style={{
                      backgroundColor: '#E3BB87',

                      alignItems: 'center', 
                      justifyContent: 'center',   
                      height: 50,
                      width: 100,
                      borderRadius: 10,
                      }}>
                      <Text style={{ color: 'white' }}>Assinar</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          <View style={styles.Tela_Dois}>
            <View style={styles.Tela_Dois_Esquerda}>
            <Image style={styles.logo2} source={{uri: 'https://s3.static.brasilescola.uol.com.br/be/2022/09/abaixo-assinado.jpg',}}/>
            </View>
            <View style={styles.Tela_Dois_Direita}>
              <Text>*RUA*</Text>
              <Text>*DESCRICAO_MOTIVOS------------------------------------------------------------------------------------------------------------------</Text>
              
            </View>
          </View>
        </View>
      </View>

      <View style={styles.Div_Baixa}>

        <View style={styles.Bottao}>
            <Image style={styles.logo3}source={require('../assets/acao.png')}/>
            <View style={styles.Dentro_Bottao}>
            </View>     
        </View>
        <View style={styles.Bottao}>
            <Image style={styles.logo3} source={require('../assets/mapa.png')}/>
            <View style={styles.Dentro_Bottao}>
            </View>     
          </View>
        <View style={styles.Bottao}>
            <Image style={styles.logo3} source={require('../assets/estrela.png')}/>
            <View style={styles.Dentro_Bottao}>
            </View>     
        </View>
        <View style={styles.Bottao}>
            <Image style={styles.logo3} source={require('../assets/calendario.png')}/>
            <View style={styles.Dentro_Bottao}>
            </View>         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BDD2DC',
    width: '100%',
    height: '100%',
  },
  Div_Alta: {

    backgroundColor: '#004361',
    width: '100%',
    height: '10%',
    alignItems:'center',
    justifyContent:'center'
  },
  Titulo: {

    display: 'flex',
    color: '#D2B38A',
    fontSize: 50,

  },
  Div_Meio: {

    display:'flex',
    width: '100%',
    height: '81%',
    justifyContent:'center',
    alignItems: 'center',

  },
  Informação: {
    
    width: '90%',
    height: '100%',
    justifyContent:'space-evenly',

  },
  Tela_Um:{

    backgroundColor: '#FCE8CF',
    borderRadius: 20,
    width: '100%',
    height: '60%',

  },
  Tela_Um_Cima:{

    width: '100%',
    height: '10%',
    justifyContent:'center',
    alignItems:'center',

  },
  Titulo2: {

    display: 'flex',
    color: 'black',
    fontSize: 25,

  },
  Tela_Um_Meio:{

    width: '100%',
    height: '50%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',

  },
  Tela_Um_Meio_Direita:{

    width: '40%',
    height: '100%',
    alignItems:'center',
    margin:'5%',

  },
  info_cima:{

    width: '100%',
    height: '70%',

  },
  info_baixo:{

    width: '100%',
    height: '30%',

  },
  Tela_Um_Meio_Esquerda:{

    backgroundColor:'white',
    width: '40%',
    height: '100%',
    borderRadius:20,

  },
  logo1: {

    width: '100%',
    height: '100%',
    borderRadius:20,

  },
  Tela_Um_Meio_baixo:{

    width: '100%',
    height: '40%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    margin:10,

  },
  Tela_Um_M_baixo_esquerda:{

    width: '50%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',

  },
  barraProgress:{

    width: '100%',
    height: '15%',
    borderColor:'black',
    borderRadius:25,
    backgroundColor:'white',
    borderWidth: 1,

  },
  barraProgressP:{

    width: '50%',
    height: '100%',
    borderColor:'black',
    borderRadius:25,
    backgroundColor:'#38CC20',

  },
  Tela_Um_M_baixo_direito:{

    width: '50%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',

  },
  Tela_Dois:{

    display:'flex',
    backgroundColor: '#FCE8CF',
    borderRadius: 20,
    width: '100%',
    height: '30%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',

  },
  Tela_Dois_Direita: {

    alignItems:'center',
    width: '50%',
    height: '100%',
    borderRadius:20,
    margin:5,
  
  },
  Tela_Dois_Esquerda: {
    

    width: '40%',
    height: '90%',
    borderRadius:20,
    margin:2,

  },
  logo2: {

    width: '100%',
    height: '100%',

  },  
  Div_Baixa: {

    backgroundColor: '#004361',
    width: '100%',
    height: '9%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',

  },
  Bottao: {

    width: '20%',
    height: '100%',
    borderRadius:50,
    margin:'3%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  Dentro_Bottao:{

    width: '60%',
    height: '50%',

  },
  logo3:{

    width: '100%',
    height: '100%',
  },
});*/