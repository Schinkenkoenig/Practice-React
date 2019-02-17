import { combineReducers } from "redux";
import digitReducer from "./digit";

export default combineReducers({ numberState: digitReducer });
