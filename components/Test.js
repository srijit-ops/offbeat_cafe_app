import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import {endPoints,base_url} from "../utility/request"
const Test = () => {
    useEffect(() => {
      (
        async()=>{
            const v = await axios.get(base_url)
            console.log(v)
        }
      )()
    
      
    }, [])
    
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})
// const config = {
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// }
// const config = {
//   headers: {
//     "Content-Type": "application/json"
//   }
// }