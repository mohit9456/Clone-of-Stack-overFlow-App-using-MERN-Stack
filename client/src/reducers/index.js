import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import userReducer from './users'
// import questionReducer from './question'

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, userReducer
})