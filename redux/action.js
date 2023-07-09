import {selecting_company,selecting_employee,selecting_room} from "../redux/actionTypes"
import { screenNames } from '../utility/screenNames'
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
const updateStateAndNavigate = (newState) => {
    return (dispatch) => {
      dispatch(selectCompany(newState));
      dispatch(selectEmployee(newState));
      dispatch(selectRoom(newState));
      dispatch(navigateToNewScreenAction());
    };
  };
  
  const navigateToNewScreenAction = () => {
    return (dispatch) => {
      dispatch(navigation.navigate(screenNames.employee))
    };
  };
export {selectCompany,selectEmployee,selectRoom,updateStateAndNavigate,navigateToNewScreenAction}