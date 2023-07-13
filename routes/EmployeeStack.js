import { createStackNavigator } from '@react-navigation/stack';
import EmployeeDetail from '../components/EmployeeDetail';
import BeverageDetail from '../components/BeverageDetail';
import { screenNames } from '../utility/screenNames';
const stackNavigator= createStackNavigator()
function EmployeeStack(){
    return(
            <stackNavigator.Navigator>
                <stackNavigator.Screen name={screenNames.employee} component={EmployeeDetail}/>
                <stackNavigator.Screen name={screenNames.beverage} component={BeverageDetail}/>
             </stackNavigator.Navigator>
    )
}
export default EmployeeStack
