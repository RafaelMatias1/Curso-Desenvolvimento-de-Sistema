import React from "react";
import { TouchableOpacity, Text, StyleSheet,TextInput,View} from "react-native";


export default function Input({maxCaracteres,placeholder,altura,largura,fonteTamanho,borderRadius}){

    
    if (isNaN(borderRadius)) {
     borderRadius= 20;
    }
    if(isNaN(maxCaracteres)){
     maxCaracteres= 20
    }
    if(isNaN(altura)){
        altura=36
    }



    return(
   
        <TextInput style={[styles.input,{ height:altura ,width:largura,fontSize:fonteTamanho, borderRadius:borderRadius}]} placeholder={placeholder} maxLength={maxCaracteres}  ></TextInput>
  
    )
}

const styles = StyleSheet.create({
   
      input:{
        backgroundColor:'#FCE8CF',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
      },


});