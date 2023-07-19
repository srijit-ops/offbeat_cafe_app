import { Button, StyleSheet, Text, View,Image, ScrollView, Pressable} from 'react-native'
import {React, useState,useEffect} from 'react'
import { globalStyles } from '../styles/globalStyles'
import axios from 'axios';
import {endPoints,base_url} from '../utility/request'
import { SelectList } from 'react-native-dropdown-select-list'
import store from '../redux/store';
import {connect} from "react-redux"
import  {selectCompany,selectEmployee,selectRoom,selectSize,selectBeverage,updateStateAndNavigate,updateLogs} from "../redux/action"
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../utility/screenNames'


const mapDispatchToProps = (store) => {
  return {
    dispatchStateAndNavigate: (val,navigation) => store.dispatch(updateStateAndNavigate(val,navigation)),
    dispatchBeverage: (val) => store.dispatch(selectBeverage(val)),
    dispatchSize: (val) => store.dispatch(selectSize(val)),
    dispatchLogs:(val) => store.dispatch(updateLogs(val))
  };
};
const BeverageDetail = () => {
  // const finalData={}
  const [finalData, setfinalData] = useState({})
  const [beverageNames, setBeverageNames] = useState([])
  const [beverageSize, setBeverageSize] = useState([])
  // const [selectedSize, setSelectedSize] = useState("");
  // const [selectedBeverage, setSelectedBeverage] = useState("");
  const [price, setprice] = useState("")
  const [beverageData, setbeverageData] = useState([])
  const navigation= useNavigation()
  useEffect(() => {
    axios.get(base_url+endPoints[1].beverageURL).then(response => {
      setbeverageData(response.data)
      })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [])
  useEffect(() => {
    setTimeout(()=>{
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
        if(beverageData.data){
          const newBeverageNamesWithDuplicates=beverageData.data.map((data)=>{
            const obj={}
            obj['key']=data.ID
            obj['value']=data.beverage_name
            return obj
          })
          const newBeverageNames=removeDuplicates(newBeverageNamesWithDuplicates)
          setBeverageNames(newBeverageNames)
          const newBeverageSizeWithDuplicates=beverageData.data.map((data)=>{
            const obj={}
            obj['key']=data.ID
            obj['value']=data.size
            return obj
          })
          const newBeverageSize=removeDuplicates(newBeverageSizeWithDuplicates)
          setBeverageSize(newBeverageSize)
        }
    },0)
    
    }
  , [beverageData])

  useEffect(() => {
    setTimeout(() => {
      console.log(beverageData)
      if(store.getState().selectedBeverage&&store.getState().selectedSize&&beverageData.data){
        console.log()
        for(let i=0;i<beverageData.data.length;i++){ //this beverageDta.data is coming undeifned in mobile- error
          console.log(beverageData.data[i])
          console.log(store.getState().selectedBeverage)
          console.log(store.getState().selectedSize)
          if(beverageData.data[i].beverage_name===store.getState().selectedBeverage && beverageData.data[i].size.toUpperCase()===store.getState().selectedSize.toUpperCase()){ //sometimes this condition never getting true, lemon tea, small still have problem
            setprice(beverageData.data[i].price)
            console.log(price)
            // price= i.price
            
          }else console.log("omg")
        }
      }else console.log("omg-else")
      
    }, 1000);
    
  }, [store.getState().selectedBeverage,store.getState().selectedSize,beverageData.data]) 

  useEffect(() => {
    
      if(price){
        console.log(price)
        setfinalData({
          "name":store.getState().selectedEmployee,
          "company":store.getState().selectedCompany,
          "room":store.getState().room,
          "beverage":store.getState().selectedBeverage,
          "beverageSize":store.getState().selectedSize,
          "price":price
        })
        // finalData["name"]= store.getState().selectedEmployee
        // console.log(finalData.name)
        // finalData["company"]= store.getState().selectedCompany
        // finalData["room"]= store.getState().room
        // finalData["beverage"]= store.getState().selectedBeverage
        // finalData["beverageSize"]=store.getState().selectedSize
        // finalData["price"]=price
        console.log("1")
        console.log(finalData)
      }
   
    
  }, [price]) 
  
  const pressHandler=()=>{
    console.log("2")
    console.log(finalData)
    if(Object.keys(finalData).length){
      console.log(finalData)
    store.getState().logData.push(finalData)
    mapDispatchToProps(store).dispatchLogs(store.getState().logData) 
    console.log(store.getState().logData)
    const userData = JSON.stringify(finalData)
    // https://script.google.com/macros/s/AKfycbzvL-_YRDppk2GJfAyRFnhPP6LKlnR25rXK_zobnzkfiHkXz-eYbYPxY8NDSLCe_NsP/exec
    // https://script.google.com/macros/s/AKfycbwdelgLBZqPCDbUGdcj94oVUtq4JzfyOLVlg2F2B50uLt2sg462T65aB7NuveRdDiQY/exec final
    axios.post("https://script.google.com/macros/s/AKfycby5RDmCpoi9sVW-gtYTAm1R6DxxzmcEbswB2GhEW6_ZKlyOT09GmAnljz6eG8K-Ew9E/exec",userData).then(() => {
      console.log("success");
    })
    .catch(error => {
      console.error('Error:', error);
    })
      mapDispatchToProps(store).dispatchStateAndNavigate("",navigation)
    }
  }
  return (
    <ScrollView contentContainerStyle={globalStyles.rootView}>
      <View style={globalStyles.formContainer}>
      <Text style={globalStyles.heading}>Beverage Details</Text>
      <Text style={globalStyles.label}>Enter Beverage Name</Text>
      <SelectList boxStyles={{borderRadius: 7, paddingVertical:13, marginBottom:13}} fontFamily='SignikaRegular'
        setSelected={(val) => 
          mapDispatchToProps(store).dispatchBeverage(val) 
        } 
        data={beverageNames}
        save="value"
    />
      <Text style={globalStyles.label}>Enter beverage size</Text>
      <SelectList boxStyles={{borderRadius: 7, paddingVertical:13}} fontFamily='SignikaRegular'
        setSelected={(val) => 
          mapDispatchToProps(store).dispatchSize(val) 
        } 
        data={beverageSize} 
        save="value"
    />
    <Pressable style={globalStyles.button} onPress={pressHandler}>
      <Text style={globalStyles.buttonText}>Submit</Text>
    </Pressable>
      </View>
      <View style={{flex:1, justifyContent:"center",alignItems:"center", position:"relative", zIndex:1}}>
      <Image source={require("../assets/beverage1.png")} style={globalStyles.img}/>
      </View>
    </ScrollView>
  )
}
export default connect(mapDispatchToProps)(BeverageDetail);


const styles = StyleSheet.create({
  searchBar:{
    height:20,
    width:20
  }
})