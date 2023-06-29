import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { screenNames } from '../utility/screenNames'
import {React, useState} from 'react'
import { globalStyles } from '../styles/globalStyles'
// import RNPickerSelect from "react-native-picker-select";
import {Picker} from '@react-native-picker/picker';
const EmployeeDetail = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pressHandler=()=>{
    navigation.navigate(screenNames.beverage)
    console.log("called")
  }
  return (
    <View>
      {console.log("hola")}
      <Text >Employee Details</Text>
      {console.log("hola2")}
      <Text>Enter Company Name</Text>

      {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Text>Enter Room Number</Text>
      <TextInput keyboardType='numeric' placeholder='enter room number'/>
      
      <Button title='Done' onPress={pressHandler}/> */}
    </View>
  )
}

export default EmployeeDetail

const styles = StyleSheet.create({})