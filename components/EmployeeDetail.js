import { Button, StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { screenNames } from '../utility/screenNames'
import {React, useState} from 'react'
import { globalStyles } from '../styles/globalStyles'
import CustomComponent from './CustomComponent'
// import {Picker} from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'
const EmployeeDetail = ({navigation}) => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  // const [selectedLanguage, setSelectedLanguage] = useState();
  // const button=customComponent()
  const companyData = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]

  const employeeData = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Gujrat'},
    {key:'3',value:'Maharashtra'},
    {key:'4',value:'Goa'},
  ];
  const pressHandler=()=>{
    navigation.navigate(screenNames.beverage)
  }
  return (
    <View>
      <View style={{flex:1, justifyContent:"center",alignItems:"center", position:"relative", zIndex:1}}>
      <Image source={require("../assets/employee2.png")} style={{height:200, width:200, position:"relative", zIndex:1}}/>
      </View>
      <Text style={globalStyles.heading}>Employee Details</Text>
      <Text>Enter Company Name</Text>
      {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <SelectList 
        setSelected={(val) => setSelectedCompany(val)} 
        data={companyData} 
        save="value"
    />
      <Text>Enter Room Number</Text>
      <TextInput keyboardType='numeric' placeholder='enter room number' style={globalStyles.inputBox}/>
      <Text>Search employee name</Text>
      <SelectList 
        setSelected={(val) => setSelectedEmployee(val)} 
        data={employeeData} 
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
    <CustomComponent title="done"/>
      <Button title='Done' onPress={pressHandler} style={globalStyles.button}/>
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