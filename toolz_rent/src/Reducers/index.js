
import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import CustomerReducer from './CustomerReducer'
import ToolsReducer from './ToolsReducer'
import RentReducer from './RentReducer'
export default combineReducers({
  Login:LoginReducer,
  Customer:CustomerReducer,
  Tools:ToolsReducer,
  Rent:RentReducer
})
