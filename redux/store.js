import {createStore} from "redux"
// import thunk from "redux-thunk"
import reducer from "./reducer"
// const rootReducer=combineReducers({
//     reducer
// })
console.log(reducer)
const store= createStore(reducer)
console.log(store)
export default store