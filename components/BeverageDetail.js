import { Button, StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { screenNames } from '../utility/screenNames'
import {React, useState,useEffect} from 'react'
import { globalStyles } from '../styles/globalStyles'
import CustomComponent from './CustomComponent'
import axios from 'axios';
import {endPoints,base_url,proxyUrl} from '../utility/request'
// import {Picker} from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'

const EmployeeDetail = ({navigation}) => {
  let beverageData
  const [beverageNames, setBeverageNames] = useState([])
  const [beverageSize, setBeverageSize] = useState([])
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");

  useEffect(() => {
    console.log(base_url+endPoints[1].employeeURL)
    axios.get(base_url+endPoints[1].employeeURL).then(response => {
      beverageData = response.data;
      console.log(beverageData)
      const newBeverageNames=beverageData.data.map((data)=>{
        const obj={}
        obj['key']=data.ID
        obj['value']=data.beverage_name
        return obj
      })
      setBeverageNames(newBeverageNames)
      const newBeverageSizeWithDuplicates=beverageData.data.map((data)=>{
        const obj={}
        obj['key']=data.ID
        obj['value']=data.size
        return obj
      })
      function removeDuplicates(array) {
        var uniqueValues = {};

        return array.filter(function(item) {
          var value = item.value;
          
          if (!uniqueValues[value]) {
            uniqueValues[value] = true;
            return true;
          }
          
          return false;
        });
      }
      const newBeverageSize=removeDuplicates(newBeverageSizeWithDuplicates)
      setBeverageSize(newBeverageSize)
      })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }, [])

  const pressHandler=()=>{
    navigation.navigate(screenNames.beverage)
  }
  return (
    <View>
    {console.log(beverageNames)}
      <View style={{flex:1, justifyContent:"center",alignItems:"center", position:"relative", zIndex:1}}>
      <Image source={require("../assets/employee2.png")} style={{height:200, width:200, position:"relative", zIndex:1}}/>
      </View>
      <Text style={globalStyles.heading}>Beverage Details</Text>
      <Text>Enter Beverage Name</Text>
      {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <SelectList 
        setSelected={(val) => setSelectedBeverage(val)} 
        data={beverageNames}
        save="value"
    />
      <Text>Enter beverage size</Text>
      <SelectList 
        setSelected={(val) => setSelectedSize(val)} 
        data={beverageSize} 
        save="value"
    />
      {/* <SelectList 
      onSelect={() => alert(selectedEmployee)}
      setSelected={setSelectedEmployee} 
      data={employeeData}  
      arrowicon={<Image source={require("../assets/down-arrow.png")} style={styles.searchBar}/>} 
      searchicon={<Image source={require("../assets/loupe.png")} style={styles.searchBar}/>} 
      search={true} 
      boxStyles={{borderRadius:0}} //override default styles
      defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
    /> */}
    
      <Button title='Submit' onPress={pressHandler} style={globalStyles.button}/>
    </View>
  )
}
export default EmployeeDetail

const styles = StyleSheet.create({
  searchBar:{
    height:20,
    width:20
  }
})