import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import navigatorCreator from "./routes/stackNavigator"
import {React, useState, useEffect} from "react"
import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from 'react-navigation';
// import EmployeeDetail from '../components/EmployeeDetail';
import BeverageDetail from './components/BeverageDetail';
import { NavigationContainer } from '@react-navigation/native';
import { screenNames } from './utility/screenNames';
export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'SignikaBold': require('./assets/fonts/SignikaNegative-Bold.ttf'),
  //   'SignikaRegular': require('./assets/fonts/SignikaNegative-Regular.ttf'),
  //   'SignikaMedium': require('./assets/fonts/SignikaNegative-Medium.ttf'),
  //   'SignikaSemibold': require('./assets/fonts/SignikaNegative-SemiBold.ttf')
  // });
  const stackNavigator= createStackNavigator()
  const [fontsLoaded, setfontsLoaded] = useState(false)
  const loadFonts= async()=>{
    await Font.loadAsync({
      'SignikaNegative': require('./assets/fonts/SignikaNegative-Bold.ttf'),
    });
   setfontsLoaded(true)
   if(fontsLoaded){
    console.log("testing")
   }
  }
  useEffect(() => {
    loadFonts()
    console.log("test2")
  }, [])
  
  const component=navigatorCreator()
  if(fontsLoaded){
    return (
    
      <View style={styles.container}>
        <Text>hello</Text>
        {/* {component} */}
        <NavigationContainer>
            <stackNavigator.Navigator>
            {console.log("part1")}
                {/* <stackNavigator.Screen name={screenNames.employee} component={EmployeeDetail}/> */}
                {console.log("part2")}
                <stackNavigator.Screen name={screenNames.beverage} component={BeverageDetail}/>
             </stackNavigator.Navigator>
        </NavigationContainer>
        <Text>Abc</Text>
      </View>
    );
  }else console.log("error")
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width:"100%"
  },
});
