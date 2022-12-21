import {combineReducers } from "redux";
import posts from "./Posts"
import { AuthReducer} from "./Auth"

export default combineReducers({
    posts,AuthReducer
})