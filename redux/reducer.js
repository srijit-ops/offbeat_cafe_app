import {selecting_company,selecting_employee,selecting_room,selecting_beverage,selecting_size,updating_logdata} from "./actionTypes"
import initialState from "./initialState"
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case selecting_company:{
            return {
                ...state,
                selectedCompany: action.payload
            }
        }
        case selecting_employee:{
           return {
            ...state,
            selectedEmployee: action.payload
           } 
        }
        case selecting_room:{
            return {
                ...state,
               room:action.payload
               } 
        }
        case selecting_beverage:{
            return {
                ...state,
               selectedBeverage:action.payload
               } 
        }
        case selecting_size:{
            return {
                ...state,
                selectedSize:action.payload
               } 
        }
        case updating_logdata:{
            return {
                ...state,
                logData:action.payload
               } 
        }
        default:{
            return state
        }
            
    }
}
export default reducer