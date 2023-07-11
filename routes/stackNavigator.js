import { createStackNavigator } from '@react-navigation/stack';
import EmployeeDetail from '../components/EmployeeDetail';
import BeverageDetail from '../components/BeverageDetail';
import { NavigationContainer } from '@react-navigation/native';
import { screenNames } from '../utility/screenNames';
import store from '../redux/store';
import {selectCompany} from "../redux/action"
const stackNavigator= createStackNavigator()
function navigatorCreator(){
    return(
    
        <NavigationContainer>
            <stackNavigator.Navigator>
                {console.log(selectCompany)}
            {console.log("part1")}
                <stackNavigator.Screen name={screenNames.employee} component={EmployeeDetail}/>
                {console.log("part2")}
                <stackNavigator.Screen name={screenNames.beverage} component={BeverageDetail}/>
                
             </stackNavigator.Navigator>
        </NavigationContainer>
    )
}
export default navigatorCreator
