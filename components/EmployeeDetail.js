import { Button, StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { screenNames } from '../utility/screenNames'
import {React, useState,useEffect} from 'react'
import { globalStyles } from '../styles/globalStyles'
import CustomComponent from './CustomComponent'
import axios from 'axios';
import {endPoints,base_url} from '../utility/request'
// import {Picker} from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'
import store from '../redux/store'
import {connect} from "react-redux"
import  {selectCompany,selectEmployee,selectRoom} from "../redux/action"

const mapDispatchToProps = (store) => {
  return {
    dispatchCompany: (val) => store.dispatch(selectCompany(val)),
    dispatchEmployee: (val) => store.dispatch(selectEmployee(val)),
    dispatchRoom: (val) => store.dispatch(selectRoom(val))
  };
};
const EmployeeDetail = ({navigation}) => {
  const [employeeNames, setemployeeNames] = useState([])
  const [companyNames, setcompanyNames] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [room, setroom] = useState("")
  const [selectedCompany, setSelectedCompany] = useState("");
  let employeeData
  
  console.log(selectedEmployee)
  useEffect(() => {
    axios.get(base_url+endPoints[0].employeeURL).then(response => {
      employeeData = response.data;
      function removeDuplicates(array) {
        let uniqueValues = {};
        return array.filter(function(item) {
          let value = item.value.toLowerCase();
          if (!uniqueValues[value]) {
            uniqueValues[value] = true;
            return true;
          }
          return false;
        });
      }
      const newEmployeeNames=employeeData.data.map((data)=>{
        const obj={}
        obj['key']=data.ID
        obj['value']=data.employee_name
        return obj
      })
      setemployeeNames(newEmployeeNames)
      const newCompanyNamesWithDuplicates=employeeData.data.map((data)=>{
        const obj={}
        obj['key']=data.ID
        obj['value']=data.company_name
        return obj
      })
      const newCompanyNames=removeDuplicates(newCompanyNamesWithDuplicates)
      setcompanyNames(newCompanyNames)
      })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log(store)
  }, [])

  const pressHandler=()=>{
    navigation.navigate(screenNames.beverage)
    console.log(selectedCompany,selectedEmployee,room)
  }
  console.log(store)
  return (
    <View>
      <View style={{flex:1, justifyContent:"center",alignItems:"center", position:"relative", zIndex:1}}>
      <Image source={require("../assets/employee2.png")} style={{height:200, width:200, position:"relative", zIndex:1}}/>
      </View>
      <Text style={globalStyles.heading}>Employee Details</Text>
      <Text>Enter Company Name</Text>
      <SelectList 
        setSelected={(val) => {
          setSelectedCompany(val)
          console.log("hello")
          mapDispatchToProps(store).dispatchCompany(val)
          console.log(store.getState())
          // dispatchCompany(val)
        }} 
        data={companyNames}
        save="value"
    />
      <Text>Enter Room Number</Text>
      <TextInput keyboardType='numeric' placeholder='enter room number' onChangeText={(text)=>mapDispatchToProps(store).dispatchRoom(text)} style={globalStyles.inputBox}/>
      <Text>Search employee name</Text>
      <SelectList 
        setSelected={(val) => {
          setSelectedEmployee(val)
          mapDispatchToProps(store).dispatchEmployee(val)
          console.log(store.getState())
          
        }
        } 
        data={employeeNames} 
        save="value"
    />
    {/* <CustomComponent title="done"/> */}
      <Button title='Done' onPress={pressHandler} style={globalStyles.button}/>
    </View>
  )
}

export default connect(mapDispatchToProps)(EmployeeDetail);

const styles = StyleSheet.create({
  searchBar:{
    height:20,
    width:20
  }
})