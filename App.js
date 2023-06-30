import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import navigatorCreator from "./routes/stackNavigator"
import {React, useState, useEffect} from "react"
export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false)
  const loadFonts= async()=>{
    await Font.loadAsync({
      'SignikaBold': require('./assets/fonts/SignikaNegative-Bold.ttf'),
      'SignikaRegular':require('./assets/fonts/SignikaNegative-Regular.ttf'),
      'SignikaMedium': require('./assets/fonts/SignikaNegative-Medium.ttf'),
    'SignikaSemibold': require('./assets/fonts/SignikaNegative-SemiBold.ttf')
    });
   setfontsLoaded(true)
  }
  useEffect(() => {
    loadFonts()
  }, [])
  
  const component=navigatorCreator()

  if(fontsLoaded){
     return (
      <SafeAreaView style={styles.container}>
        {component}
      </SafeAreaView>
    );
}else console.log("error")}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width:"100%",
    height:"100%"
  },
});
