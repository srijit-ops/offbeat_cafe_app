import {selecting_company,selecting_employee,selecting_room,selecting_beverage,selecting_size,updating_logdata} from "../redux/actionTypes"
import { screenNames } from '../utility/screenNames'
import store from "./store"
const selectCompany=(companyName)=>{
    return{
        type:selecting_company,
        payload: companyName
    }
}
const selectEmployee=(employeeName)=>{
    return{
        type:selecting_employee,
        payload:employeeName
    }
}
const selectRoom=(roomNumber)=>{
    return{
        type:selecting_room,
        payload:roomNumber
    }
}
const selectBeverage=(beverage)=>{
  return{
      type:selecting_beverage,
      payload:beverage
  }
}
const selectSize=(size)=>{
  return{
      type:selecting_size,
      payload:size
  }
}
const updateLogs=(arrWithObj)=>{
  return{
      type:updating_logdata,
      payload:arrWithObj
  }
}
const updateStateAndNavigate = (newState,navigation) => {
    return (dispatch) => {
      navigation.navigate(screenNames.employee)
    };
  };
  
  const navigateToNewScreenAction = (navigation) => {
    return () => {
      navigation.navigate(screenNames.employee) 
    };
  };
export {selectCompany,selectEmployee,selectRoom,selectSize,selectBeverage,updateStateAndNavigate,updateLogs}