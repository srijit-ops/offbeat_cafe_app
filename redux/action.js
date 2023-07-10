import {selecting_company,selecting_employee,selecting_room} from "../redux/actionTypes"
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
console.log(selectCompany())
const updateStateAndNavigate = (newState,navigation) => {
    return (dispatch) => {
      
      // console.log(navigation)
      // console.log(typeof(navigation.navigate(screenNames.employee)))
      // console.log(typeof(navigateToNewScreenAction(navigation)))
      // console.log(typeof(navigation.navigate(screenNames.employee)))
      dispatch(selectCompany(newState));
      dispatch(selectEmployee(newState));
      dispatch(selectRoom(newState));
      console.log("first")
      console.log(store.getState())
      if(store.getState().room==="" && store.getState().selectedCompany==="" && store.getState().selectedEmployee===""){
        console.log("navigated")
        console.log(store.getState().selectedCompany)
        navigation.navigate(screenNames.employee)
      }
      // navigation.navigate(screenNames.employee)
      // dispatch(navigateToNewScreenAction(navigation));
    
      
      // console.log(typeof(navigateToNewScreenAction(navigation)))
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
export {selectCompany,selectEmployee,selectRoom,updateStateAndNavigate}