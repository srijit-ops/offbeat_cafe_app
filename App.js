import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import navigatorCreator from "./routes/EmployeeStack"
import {React, useState, useEffect} from "react"
import {Provider} from 'react-redux';
import store from "./redux/store"
import BottomTabs from './routes/BottomTabs';
export default function App() {
  console.log(store)
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
      <Provider store={store}>
        {console.log("captured")}
        <SafeAreaView style={styles.container}>
        <BottomTabs/>
      </SafeAreaView>
      </Provider>
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
// https://script.google.com/macros/s/AKfycbzX-ReS7ys_Ft1ukohRiGtrwBhmz8MsTR9zR1c9y8sYhhb6sra1caEacfEkDzuFn6xA/exec   --get api employee details