import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import Home from './screen/home';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View, Text} from 'react-native';


const getFonts =() =>Font.loadAsync({
    'nunito-regular':require('./assets/fonts/NunitoSans_10pt-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/NunitoSans_10pt-Bold.ttf'),
  });


export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);


  if(fontsLoaded){
    return (
      <Home />
  );
  }
  else{
    return(
    
      <AppLoading

      StartAsync={getFonts}
      onFinish={
        ()=>setFontsLoaded(true)}
      onError={console.warn}
    />
    )

  }
  

}


