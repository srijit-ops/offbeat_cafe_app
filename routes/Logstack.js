import { createStackNavigator } from '@react-navigation/stack';
import { screenNames } from '../utility/screenNames';
import Logs from '../components/Logs';
const stackNavigator= createStackNavigator()
function Logstack(){
    return(
            <stackNavigator.Navigator>
                <stackNavigator.Screen name={screenNames.logs} component={Logs}/>
             </stackNavigator.Navigator>
    )
}
export default Logstack