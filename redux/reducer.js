import {selecting_company,selecting_employee,selecting_room} from "./actionTypes"
import initialState from "./initialState"
const reducer=(state=initialState,action)=>{
    console.log(action.type)
    console.log(state)
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
        default:{
            console.log("in")
            return state
        }
            
    }
}
export default reducer