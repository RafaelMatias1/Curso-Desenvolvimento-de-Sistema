import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Assinar() {
  return (
    <View style={styles.container}>
      <View style={styles.cima}>
        <Text style={styles.Titulo}>Assine</Text>
      </View>

      <View style={styles.meio}>
        <View style={styles.meio_div_cima}>
          <View style={styles.div_titulo}><Text style={styles.Titulo}>Titulo da Rua</Text></View> 
          <View style={styles.div_dentro}>
            <View style={styles.div_imagem}>
              <Image style={styles.logo1} source={{uri: 'https://blog.laredo.com.br/wp-content/uploads/2022/09/post_thumbnail-00e5da669e546b308b7fb7c0fdec422a-1080x720.jpeg',}}/>
            </View>
            <View style={styles.div_texto}>
            <Text>Nós, abaixo-assinados, dirigimos este manifesto às autoridades competentes para apresentar a proposta de preservação da Serra do Gandarela. Localizada nos municípios de Caeté, Santa Bárbara, Barão de Cocais, Rio Acima, Itabirito e Raposos/MG, a Serra do Gandarela integra a Reserva da Biosfera do Espinhaço e abriga as maiores manchas de Mata Atlântica, da Região Metropolitana de Belo Horizonte (RMBH), e de Campos Rupestres sobre Cangas Ferruginosas, de Minas Gerais. Grande diversidade de flora e fauna, com espécies raras e em extinção, cavernas, sítio paleontológico e um conjunto expressivo de cachoeiras e mananciais, que abastecem vários municípios da RMBH e as bacias dos rios das Velhas e Piracicaba, fazem da Serra do Gandarela um local de valor inestimável. Diante desta realidade, nós abaixo-assinados, propomos a criação do PARQUE NACIONAL ÁGUAS DA SERRA DO GANDARELA como a melhor alternativa de proteção e desenvolvimento ambiental, turístico e cultural da região.</Text>  
            </View> 
          </View> 
        </View>
      </View>
      <View style={styles.baixo}>
        <View style={styles.baixo_nome}>
          <Text>
            Locarização: Rua São Pedro,Areais,São José
          </Text>
        </View>
        <View style={styles.baixo_botao}>
          <TouchableOpacity style={styles.button2}>
            <Text>Assinar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{

    width: '100%',
    height: '100%',

  },
  cima:{

    backgroundColor: '#004361',
    width: '100%',
    height: '10%',
    alignItems:'center',
    justifyContent:'center'
    
  },
  Titulo: {

    color: '#D2B38A',
    fontSize: 40,

  },
  meio:{
    backgroundColor: '#BDD2DC',
    width: '100%',
    height: '80%',
    justifyContent:'center',
    alignItems: 'center',
  
  },
  meio_div_cima:{

    backgroundColor: '#FCE8CF',
    width: '100%',
    height: '100%',

  },
  div_titulo:{

    width: '100%',
    height: '10%',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  div_dentro:{

    width: '90%',
    height: '70%',
    margin:'5%',
    borderRadius:25,
    
  },
  div_imagem:{

    width: '100%',
    height: '40%',
    justifyContent:'center',
    alignItems: 'center',
  },
  div_texto:{

    width: '100%',
    height: '100%',
    alignItems: 'center',
    
  },
  baixo_div_baixo:{

    backgroundColor: '#FCE8CF',
    width: '80%',
    height: '20%',
    borderRadius:25,
    margin:'2%',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  logo1: {

    width: '80%',
    height: '100%',
    borderRadius:25,

  },
  baixo:{

    backgroundColor: '#FCE8CF',
    width: '100%',
    height: '100%',
    flexDirection:'row',

  },
  baixo_nome:{

    width: '50%',
    height: '100%',
    alignItems: 'center',

  },
  baixo_botao:{

    width: '50%',
    height: '100%',

  },
  button2:{

    backgroundColor: '#15678B',
    width: '80%',
    height: '6%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
    textAlign:'center',

  }
});