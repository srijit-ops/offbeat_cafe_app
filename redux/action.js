import {selecting_company,selecting_employee,selecting_room} from "../redux/actionTypes"
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
export {selectCompany,selectEmployee,selectRoom}