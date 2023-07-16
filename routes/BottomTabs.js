import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Logstack from "./Logstack";
import { screenNames } from '../utility/screenNames';
import { Text, View} from 'react-native';
import EmployeeStack from "./EmployeeStack";
import { NavigationContainer } from '@react-navigation/native';
import LogIcon from "../assets/icons/LogIcon";
import FormIcon from "../assets/icons/FormIcon";
const tab= createBottomTabNavigator()
console.log(tab)
const BottomTabs=()=>{
    return(
        <NavigationContainer>
            <tab.Navigator tabBarOptions={{
            
            showLabel:false, //so that all the existing styling gets deleted and we can create the style from scratch.
            style:{
                position:"absolute",
                bottom:25,
                left:20,
                right:20,
                backgroundColor:"white",
                borderRadius:15,
                height:110
            },
            unmountOnBlur: true
        }}>
            <tab.Screen name={screenNames.employee}  component={EmployeeStack}  options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                        <FormIcon fill={focused?"#FCAE1E":"#4C4E52"}/>
                        <Text style={{color:focused?"#FCAE1E":"#4C4E52"}}>Form</Text>
                    </View>
                ),headerShown: false
            }}></tab.Screen>
            <tab.Screen name={screenNames.logs} component={Logstack} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:"center",justifyContent:"center",top:10}}>
                       <LogIcon fill={focused?"#FCAE1E":"#4C4E52"}/> 
                        <Text style={{color:focused?"#FCAE1E":"#4C4E52"}}>Logs</Text>
                    </View>
                ),headerShown: false,
                unmountOnBlur: true
            }}></tab.Screen>
        </tab.Navigator>
        </NavigationContainer>
        
    )
}
export default BottomTabs