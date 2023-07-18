import { StyleSheet, Text, View, ScrollView, Pressable,Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import LogIcon from '../assets/icons/LogIcon'
import store from '../redux/store';
import { useEffect } from 'react';
import {connect} from "react-redux"
import DeleteIcon from "../assets/icons/DeleteIcon"
import  {selectCompany,selectEmployee,selectRoom,selectSize,selectBeverage,updateStateAndNavigate,updateLogs} from "../redux/action"
const state=store.getState()
const mapStateToProps = (state) => {
  return {
    data:state.logData,
    dispatchLogs:(val) => store.dispatch(updateLogs(val))
  };
};
const pressHandler=(val)=>{
  console.log("deleted")
  console.log(mapStateToProps(state).data)
  var targetIndex=mapStateToProps(state).data.indexOf(val)
  mapStateToProps(state).data.splice(targetIndex,1)
  mapStateToProps(state).dispatchLogs( mapStateToProps(state).data)
}
const Logs = () => {
  const a=5
  console.log(a)
  useEffect(()=>{
    console.log("Component mount")

    return ()=> console.log("Component unmount")
    
  },[mapStateToProps(state).data])
  console.log(mapStateToProps(state).data)
  if(mapStateToProps(state).data.length){
    return (
      <ScrollView contentContainerStyle={{marginVertical:15,paddingHorizontal:25}}>
        <Text style={globalStyles.heading}>Previous Logs</Text>
        <View style={globalStyles.heads}>
          <Text>Name</Text>
          <Text>Room</Text>
          <Text>Beverage</Text>
          <Text>Size</Text>
          <Text>Action</Text>
        </View>
        {mapStateToProps(state).data.map((item)=>{
          return (
            <View style={globalStyles.logCard}>
          <Text>{item.name}</Text>
          <Text>{item.room}</Text>
          <Text>{item.beverage}</Text>
          <Text>{item.beverageSize}</Text>
          <Pressable onPress={pressHandler(item)}>
          <DeleteIcon fill={"#4C4E52"}/>
          </Pressable>
        </View>
          )
        })}
        
      </ScrollView>
    )
  }else{
    return(
      <ScrollView contentContainerStyle={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Image source={require("../assets/warning.png")} style={globalStyles.error}/>
      <Text style={{fontFamily:"SignikaMedium",fontSize:20,color:"#888b8f",textAlign:"center",marginTop:20}}>Oops! You've not added anything yet.</Text>
      </ScrollView>
    )
  }
  
}

export default connect(mapStateToProps)(Logs);


const styles = StyleSheet.create({})