import { StatusBar } from 'expo-status-bar';

import { StyleSheet,TextInput,  View, Text, Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';

export default function AssinarConfirma() {
    return (
      <View style={styles.container}>
        <View style={styles.Div_Alta}>
          <Text style={styles.Titulo}>Assine</Text>
        </View>
        <View style={styles.Div_Meio}>
          <Text style={styles.texto}>Buraco Na pista</Text>
          <View style={styles.Div_Meio_dentro}>

            <TextInput style={styles.inputs} placeholder='nome'></TextInput>
            <TextInput style={styles.inputs}placeholder='E-mail'></TextInput>
            <TextInput style={styles.inputs}placeholder='Titulo De Eleitor'></TextInput>
            <TextInput style={styles.inputs}placeholder='Categoria'></TextInput>
              <View style={styles.BoxConfirma}>
                <View style={styles.CheackBox}>
                  <TouchableOpacity style={styles.button2}></TouchableOpacity>
                </View>
                <View>
                  <Text>Confirmo que meus dados serão utilizados</Text>
                </View>
              </View>

         

            <TouchableOpacity style={styles.button}><Text>Assinar</Text></TouchableOpacity>

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

    width: '80%',
    height: '80%',
    justifyContent:'center',
    alignItems: 'center',

  },
  inputs: {

    backgroundColor: '#FCE8CF',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    borderRadius:25,
    margin:20,
    textAlign:'center',

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
    height: '99%',
    margin:120,
    
  },
  Dentro_Bottao:{

    width: '100%',
    height: '100%',
    margin:4,

  },
  logo1:{

    width: '100%',
    height: '100%',

  },
  button:{

    backgroundColor: '#FCE8CF',
    width: '100%',
    height: '10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    margin:5,
    textAlign:'center',
    borderWidth: 2,

  },
  button2:{

    backgroundColor: '#FCE8CF',
    width: '33%',
    height: '60%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    margin:10,
    textAlign:'center',
    borderWidth: 2,

  },
  BoxConfirma:{

    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  CheackBox:{

    width: '20%',
    height: '30%',

  },
  texto:{

    fontSize:40,
    margin:10,

  }
});