import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,SafeAreaView,ScrollView} from 'react-native';



export default function PerfilSenha({navigation}){
    
  return (
    <View style={styles.container}>
      
        <View style={styles.titulo}>
            <Text style={styles.t1}>PERFIL</Text>
        </View>

        <View style={styles.meio}>

            <SafeAreaView>
                <ScrollView>

                    <View style={styles.espacamento}> 
                    </View>

                    <View style={styles.parte1}>
                            <TouchableOpacity onPress={() => navigation.navigate("perfil")} style={styles.btn1}> 
                                <Text style={styles.t2}>DADOS GERAIS</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte2}>
                            <TouchableOpacity onPress={() => navigation.navigate("perfilcontato")} style={styles.btn2}> 
                                <Text style={styles.t3} >CONTATO</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte3}>
                            <TouchableOpacity  style={styles.btn3}> 
                                <Text style={styles.t4}>SENHA E EMAIL</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte4}>
                            <TouchableOpacity onPress={() => navigation.navigate('perfilabaixoassinado')} style={styles.btn4}> 
                                <Text style={styles.t5}>ABAIXO-ASSINADOS</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte5}>
                            <TouchableOpacity  style={styles.btn4}> 
                                <Text style={styles.t6}>SAIR</Text>
                            </TouchableOpacity>
                    </View>
               
                    {/* Termina aqui os botões */}

                    <View style={styles.detalhe}> 
                        <Text style={styles.t7}>__________________</Text>
                    </View>

                    <View style={styles.espacamento1}> 
                    </View>

                    {/* Começa os INPUTS */}

                    <View style={styles.parte6}>
                            <TextInput style={styles.input} placeholder='Senha Atual'>
                            </TextInput>
                    </View>


                    <View style={styles.parte6}>
                            <TextInput style={styles.input} placeholder='Senha Nova'>
                            </TextInput>
                    </View>

                    <View style={styles.parte6}>
                            <TextInput style={styles.input} placeholder='Digite Novamente'>
                            </TextInput>
                    </View>

                    <View style={styles.parte7}>
                            <TouchableOpacity style={styles.btn6}> 
                                <Text style={styles.t8}>Editar</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.espacamento}> 
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>

        <View style={styles.fim}>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%'
  },

  titulo:{
    flex:1,
    backgroundColor:'#004361',
    alignItems:'center',
    justifyContent:'center'
  },

  t1:{
    fontSize:42,
    color:'#FCE8CF'
  },

  meio:{
    flex:8,
    backgroundColor:'#BDD2DC'
  },

  espacamento:{
    height:30,
    width:'100%',
  },

  parte1:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',

  },

  btn1:{

    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',

  },

  t2:{
    fontSize:15,
    color:'#DDC7AB',
  },

  parte2:{
    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  btn2:{
    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
  },

  t3:{
    fontSize:15,
    color:'#DDC7AB',
  },

  parte3:{
    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  btn3:{
    height:'75%',
    width:'90%',
    backgroundColor:'#15678B',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#ffff',
    borderWidth:2
  },

  t4:{

    fontSize:18,
    color:'#FCE8CF',
  },

  espacamento1:{
    height:50,
    width:'100%',

  },

  parte4:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  btn4:{

    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },

  t5:{
    fontSize:15,
    color:'#DDC7AB',
  },


  parte5:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  btn5:{

    
    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },

  t6:{
    fontSize:15,
    color:'#DDC7AB',
  },

  detalhe:{

    height:50,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-start',

  },

  t7:{
    fontSize:32
  },

  espacamento1:{
    height:20,
    width:'100%',
  },










  parte6:{

    height:80,
    width:'100%',
    backgroundColor:'#BDD2DC',
    alignItems:'center',
    justifyContent:'center',
  },

  input:{

    height:'75%',
    width:'88%',
    backgroundColor:'#FCE8CF',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontSize:16
  },

  parte7:{

    height:80,
    width:'100%',
    backgroundColor:'#BDD2DC',
    alignItems:'center',
    justifyContent:'center',
  },

  btn6:{

    height:'70%',
    width:'85%',
    backgroundColor:'#15678B',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },

  t8:{

    fontSize:18,
    color:'#FCE8CF',
  }


});