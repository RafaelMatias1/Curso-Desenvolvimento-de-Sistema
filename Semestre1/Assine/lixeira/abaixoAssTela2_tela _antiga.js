import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, View, Text, Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';

export default function abaixoAss() {
    return (
      <View style={styles.container}>
        <View style={styles.Div_Alta}>
          <Text style={styles.Titulo}>ASS Aqui</Text>
        </View>
        <View style={styles.Div_Meio}>
          <View style={styles.Div_Meio_dentro}>

            <TextInput style={styles.inputs} placeholder='nome'></TextInput>
            <TextInput style={styles.inputs}placeholder='E-mail'></TextInput>
            <TextInput style={styles.inputs}placeholder='Titulo De Eleitor'></TextInput>
            <TextInput style={styles.inputs}placeholder='Categoria'></TextInput>

          </View>
        </View>
        <View style={styles.Div_Baixa}>

          <View style={styles.baixo_esquerda}>
            <View style={styles.Bottao}>
                <View style={styles.Dentro_Bottao}>
                  <Image style={styles.logo1} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1073/1073722.png',}}/>
                </View>
              </View>
          </View>

          <View style={styles.baixo_direita}>
            <View style={styles.Bottao}>
              <View style={styles.Dentro_Bottao}>
                <Image style={styles.logo1} source={{uri: 'https://vps29400.publiccloud.com.br/images/2/2e/Confirm.png',}}/>
              </View>
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

    color: '#D2B38A',
    fontSize: 50,

  },
  Div_Meio: {

    width: '100%',
    height: '81%',
    justifyContent:'center',
    alignItems: 'center',

  },
  Div_Meio_dentro: {

    display:'flax',
    width: '80%',
    height: '80%',
    justifyContent:'center',
    alignItems: 'center',

  },
  inputs: {

    backgroundColor: '#FCE8CF',
    display:'flax',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    borderRadius:25,
    margin:10,
    

  },
  Div_Baixa: {

    backgroundColor: '#004361',
    width: '100%',
    height: '9%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',

  },
  baixo_direita: {

    width: '50%',
    height: '100%',
    alignItems:'flex-end',


  },
  baixo_esquerda: {

    width: '50%',
    height: '100%',

  },
  logo1: {

    width: '100%',
    height: '100%',
    borderRadius:25,

  },
  Bottao: {

    backgroundColor:'#220003',
    width: '35%',
    height: '90%',
    borderRadius:50,
    margin:'2%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  Dentro_Bottao:{

    width: '65%',
    height: '66%',

  },
});
