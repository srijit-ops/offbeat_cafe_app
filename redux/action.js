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
  console.log(arrWithObj)
  return{
      type:updating_logdata,
      payload:arrWithObj
  }
}
console.log(selectCompany())
const updateStateAndNavigate = (newState,navigation) => {
    return (dispatch) => {
      
     
      // dispatch(selectCompany(newState));
      // dispatch(selectEmployee(newState));
      // dispatch(selectRoom(newState));
      // dispatch(selectBeverage(newState));
      // dispatch(selectSize(newState));
      // console.log("first")
      // console.log(store.getState())
      // if(store.getState().room==="" && store.getState().selectedCompany==="" && store.getState().selectedEmployee===""&& store.getState().selectedBeverage===""&& store.getState().selectedSize===""){
      //   console.log("navigated")
      //   console.log(store.getState().selectedCompany)
      //   navigation.navigate(screenNames.employee)
      // }
      navigation.navigate(screenNames.employee)
    };
  };
  
  const navigateToNewScreenAction = (navigation) => {
    return () => {
      console.log("second")
      // console.log(typeof(navigation.navigate(screenNames.employee)))
      // console.log(typeof(screenNames.employee))
      // console.log(typeof(navigation.navigate))
      // console.log(screenNames.employee)
      navigation.navigate(screenNames.employee) //this inside part is undefined
    };
  };
export {selectCompany,selectEmployee,selectRoom,selectSize,selectBeverage,updateStateAndNavigate,updateLogs}