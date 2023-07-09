import { Button, StyleSheet, Text, View,Image} from 'react-native'
import {React, useState,useEffect} from 'react'
import { globalStyles } from '../styles/globalStyles'
import axios from 'axios';
import {endPoints,base_url} from '../utility/request'
import { SelectList } from 'react-native-dropdown-select-list'
import store from '../redux/store';
import {connect} from "react-redux"
import  {updateStateAndNavigate} from "../redux/action"

const mapDispatchToProps = (store) => {
  return {
    dispatchStateAndNavigate: (val) => store.dispatch(updateStateAndNavigate(val))
  };
};
const BeverageDetail = () => {
  const finalData={}
  const [beverageNames, setBeverageNames] = useState([])
  const [beverageSize, setBeverageSize] = useState([])
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");
  const [price, setprice] = useState("")
  const [beverageData, setbeverageData] = useState([])
  
  useEffect(() => {
    axios.get(base_url+endPoints[1].beverageURL).then(response => {
      console.log(response.data)
      setbeverageData(response.data)
      console.log(beverageData)
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
    console.log(selectedBeverage,selectedSize)
    setTimeout(() => {
      if(selectedBeverage&&selectedSize){
        for(let i=0;i<beverageData.data.length;i++){
          console.log(beverageData.data[i])
          if(beverageData.data[i].beverage_name===selectedBeverage && beverageData.data[i].size===selectedSize){
            setprice(beverageData.data[i].price)
            // price= i.price
            console.log(beverageData.data[i].price)
            
          }else console.log("omg")
        }
      }else console.log("fuck off")
      
    }, 1000);
    
  }, [selectedBeverage,selectedSize]) 

  useEffect(() => {
   
      finalData["name"]= store.getState().selectedEmployee
    finalData["company"]= store.getState().selectedCompany
    finalData["room"]= store.getState().room
    finalData["beverage"]=selectedBeverage
    finalData["beverageSize"]=selectedSize
    console.log(price)
    finalData["price"]=price
    console.log(finalData)

   
    
  }, [price]) 
  
  const pressHandler=()=>{
    console.log(finalData)
    const userData = JSON.stringify(finalData)
    axios.post("https://script.google.com/macros/s/AKfycbzvL-_YRDppk2GJfAyRFnhPP6LKlnR25rXK_zobnzkfiHkXz-eYbYPxY8NDSLCe_NsP/exec",userData).then(() => {
      console.log("success");
    })
    .catch(error => {
      console.error('Error:', error);
    })
    mapDispatchToProps(store).dispatchStateAndNavigate("")
    
  }
  return (
    <View>
    {console.log(beverageNames)}
      <View style={{flex:1, justifyContent:"center",alignItems:"center", position:"relative", zIndex:1}}>
      <Image source={require("../assets/employee2.png")} style={{height:200, width:200, position:"relative", zIndex:1}}/>
      </View>
      <Text style={globalStyles.heading}>Beverage Details</Text>
      <Text>Enter Beverage Name</Text>
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
      <Button title='Submit' onPress={pressHandler} style={globalStyles.button}/>
    </View>
  )
}
export default connect(mapDispatchToProps)(BeverageDetail);


const styles = StyleSheet.create({
  searchBar:{
    height:20,
    width:20
  }
})