import { Button, StyleSheet, Text, View, TextInput , Image,Pressable, ScrollView} from 'react-native'
import { screenNames } from '../utility/screenNames'
import {React, useState,useEffect} from 'react'
import { globalStyles } from '../styles/globalStyles'
// import CustomComponent from './CustomComponent'
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
  const [selected, setselected] = useState(store.getState().selectedEmployee)
  const [employeeNames, setemployeeNames] = useState([])
  const [companyNames, setcompanyNames] = useState([])
  // const [selectedEmployee, setSelectedEmployee] = useState("");
  // const [room, setroom] = useState(store.getState().selectedCompany)
  // const [selectedCompany, setSelectedCompany] = useState(store.getState().selectedCompany);
  let employeeData
  // console.log(selectedEmployee)
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
  }, [])

  const pressHandler=()=>{
    navigation.navigate(screenNames.beverage)
    // console.log(selectedCompany,selectedEmployee,room)
  }
  return (
    <ScrollView contentContainerStyle={globalStyles.rootView}>

      <View style={globalStyles.formContainer}>
      <Text style={globalStyles.heading}>Employee Details</Text>
      
      <Text style={globalStyles.label}>Enter Company Name</Text>
      {/* {console.log(selectedCompany)} */}
      <SelectList boxStyles={{borderRadius: 7, paddingVertical:13, marginBottom:13}} fontFamily='SignikaRegular'
        setSelected={(val) => {
          // setSelectedCompany(val)
          mapDispatchToProps(store).dispatchCompany(val)
        }} 
        data={companyNames}
        save="value"
    />
      <Text style={globalStyles.label}>Enter Room Number</Text>
      <TextInput keyboardType='numeric' placeholder="enter room no" onChangeText={(text)=>mapDispatchToProps(store).dispatchRoom(text)} value={store.getState().room} style={globalStyles.inputBox}/>
      <Text style={globalStyles.label}>Search employee name</Text>
      <SelectList boxStyles={{borderRadius: 7, paddingVertical:13}} fontFamily='SignikaRegular' val={store.getState().selectedEmployee}
        setSelected={(val) => {
          mapDispatchToProps(store).dispatchEmployee(val) 
        }
        
        } 
        data={employeeNames} 
        save="value"
    />   
    <Pressable style={globalStyles.button} onPress={pressHandler}>
      <Text style={globalStyles.buttonText}>Next</Text>
    </Pressable>
    
      </View>
      <View style={globalStyles.employeeImg}>
      <Image source={require("../assets/employee4.png")} style={globalStyles.img}/>
      </View>
    </ScrollView>
  )
}

export default connect(mapDispatchToProps)(EmployeeDetail);

const styles = StyleSheet.create({
  searchBar:{
    height:20,
    width:20
  }
})