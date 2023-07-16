import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import LogIcon from '../assets/icons/LogIcon'
import store from '../redux/store';
import { useEffect } from 'react';
import {connect} from "react-redux"
const state=store.getState()
const mapStateToProps = (state) => {
  return {
    data:state.logData
  };
};
const pressHandler=()=>{
  console.log("deleted")
}
const Logs = () => {
  // console.log(store.getState().logData)
  // useEffect(() => {
    
  //   console.log(store.getState().logData)
    
  // }, [store.getState().logData])
  useEffect(()=>{
    console.log("Component mount")

    return ()=> console.log("Component unmount")
    
  },[mapStateToProps(state).data])
  
  return (
    <ScrollView style={{marginVertical:20,marginHorizontal:30}}>
      <Text style={globalStyles.heading}>Previous Logs</Text>
      <View style={globalStyles.heads}>
        <Text>Name</Text>
        <Text>Room</Text>
        <Text>Beverage</Text>
        <Text>Size</Text>
        <Text>Action</Text>
      </View>
      {/* rendering Logs.js once even after updating state many times, that's why just first submission is coming, laters are not coming as not,rerendering.  */}
      {console.log(mapStateToProps(state).data)} 
      {mapStateToProps(state).data.map((item)=>{
        return (
          <View style={globalStyles.logCard}>
          
        <Text>{item.name}</Text>
        <Text>{item.room}</Text>
        <Text>{item.beverage}</Text>
        <Text>{item.beverageSize}</Text>
        <Pressable onPress={pressHandler}>
        <LogIcon/> 
        </Pressable>
      </View>
        )
      })}
      
    </ScrollView>
  )
}

export default connect(mapStateToProps)(Logs);


const styles = StyleSheet.create({})