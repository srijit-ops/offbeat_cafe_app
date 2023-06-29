import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from 'react-navigation';
import EmployeeDetail from '../components/EmployeeDetail';
import BeverageDetail from '../components/BeverageDetail';
import { NavigationContainer } from '@react-navigation/native';
import { screenNames } from '../utility/screenNames';
const stackNavigator= createStackNavigator()
function navigatorCreator(){
    return(
    
        <NavigationContainer>
            <stackNavigator.Navigator>
            {console.log("part1")}
                {/* <stackNavigator.Screen name={screenNames.employee} component={EmployeeDetail}/> */}
                {console.log("part2")}
                <stackNavigator.Screen name={screenNames.beverage} component={BeverageDetail}/>
             </stackNavigator.Navigator>
        </NavigationContainer>
    )
}
// console.log(navigatorCreator())
export default navigatorCreator
