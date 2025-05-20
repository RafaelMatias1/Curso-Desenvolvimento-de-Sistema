import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground,Animated } from 'react-native';
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/view/Login'
import Cadastro from './src/view/Cadastro';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (

      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{  headerShown: false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{  headerShown: false}} />
      </Stack.Navigator>

  );
}


export default function App() {


  const [loading,setloading] = useState(true)
  // animar a descida do pentagono
  const [altura]= useState(new Animated.Value(1000))
  // animar o aumento do pentago
  const [expandir]= useState(new Animated.Value(160))
  //animar ASS AQUI
  const [assaqui]= useState(new Animated.Value(13))
  //palavra descida
  const [palavradescida] = useState(new Animated.Value(-515))

  Animated.sequence([
    Animated.parallel([

      Animated.timing(

      altura,{
        toValue:0,
        duration:1300,
        useNativeDriver: false
      }),
  
      Animated.timing(

        palavradescida,{
          toValue:0,
          duration:1300,
          useNativeDriver: false
    }
    ),
  ]),
    Animated.parallel([

      Animated.timing(

          assaqui,{
            toValue:50,
            duration:1000,
            useNativeDriver: false

      }
      ),
      Animated.timing(

          expandir,{
            toValue:2000,
            duration:1500,
            useNativeDriver: false
      }
      )]),

]).start()

  useEffect(() =>  {

    setTimeout(() => {
      setloading(false);
    },2500);
  },[])

    if(loading) {
      
      return(
        
        <View style={styles.container}>
                    <StatusBar hidden />

        <View style={{    flex: 1,backgroundColor: '#FCE8CF',alignItems:'center',justifyContent:'center',display:'flex',opacity:1}}>
  
          <Animated.Text style={{position:'absolute',top:'49%',zIndex:2,fontSize:assaqui, transform: [{translateY: palavradescida}]}}>ASS AQUI</Animated.Text>
  
          <Animated.Image source={require('./assets/hexagono.png')} style={{height:expandir, width:expandir}} >
          </Animated.Image>
  
          <Animated.View style={{ width:'100%',height:altura}}>
          </Animated.View>
          
        </View>
  
      </View>
      );
    }

    return(

      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FCE8CF',

  },



  texto_principal:{

    fontSize:22,
    fontWeight:600
  }

});