import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,SafeAreaView,ScrollView,KeyboardAvoidingView} from 'react-native';



export default function Perfil(){
    
  return (
    <View style={styles.container}>
      
        <View style={styles.titulo}>
            <Text style={styles.t1}>RECLAME</Text>
        </View>

        <View style={styles.meio}>


                    <View style={styles.espacamento}>
                    </View>

                    <View style={styles.meioCinza}>

                        <View style={styles.espacamento}>
                        </View>

                        <View style={styles.parte1}>
                            <Text style={styles.t2}>INFORME A LOCARIZAÇÃO</Text>
                        </View>

                        <View style={styles.parte2}>
                            <Text style={styles.t3}>NÃO É <Text style={styles.t4}>OBRIGATÓRIO</Text></Text>
                        </View>

                        <View style={styles.espacamento}>
                        </View>

                        <View style={styles.parte3}>
                            <TextInput placeholder="CEP" style={styles.input1}></TextInput>
                        </View>

                        <View style={styles.espacamento1}>
                        </View>

                        <View style={styles.parte3}>
                            <TextInput placeholder="RUA" style={styles.input1}></TextInput>
                        </View>

                        <View style={styles.espacamento1}>
                        </View>

                        <View style={styles.parte3}>
                            <TextInput placeholder="BAIRRO" style={styles.input1}></TextInput>
                        </View>

                        <View style={styles.espacamento1}>
                        </View>

                        <View style={styles.parte3}>
                            <TextInput placeholder="CIDADE" style={styles.input1}></TextInput>
                        </View>

                        <View style={styles.espacamento1}>
                        </View>

                        <View style={styles.parte3}>
                            <TextInput placeholder="PAIS" style={styles.input1}></TextInput>
                        </View>

                    </View>

                    <View style={styles.espacamento}>
                    </View>

                    <View style={styles.parte4}>

                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.t10}>VOLTAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.t10}>CONTINUAR</Text>
                        </TouchableOpacity>


                    </View>




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

  espacamento1:{

    height:8,
    width:'100%',
  },


  meioCinza:{

    height:550,
    width:'90%',
    marginLeft:'5%',
    backgroundColor:'#9EB9C6',
    borderRadius:20
  },

  parte1:{

    height:'8%',
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  t2:{

    fontSize:22
  },

  parte2:{
    alignItems:'center'
  },

  t3:{

  },

  t4:{
    color:'#15678B',
    textDecorationLine:'underline'
  },

  parte3:{

    height:'12%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },

  input1:{
    height:'90%',
    width:'88%',
    backgroundColor:'#FCE8CF',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontSize:16,

  },

  parte4:{

    
    height:'8%',
    width:'90%',
    marginLeft:'5%',
    flexDirection:'row',
    justifyContent:'space-between',
    
  },

  btn1:{

    height:'100%',
    width:'35%',
    backgroundColor:'#06364A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
    
  },

  t10:{

    color:'#FCE8CF'
  }

});