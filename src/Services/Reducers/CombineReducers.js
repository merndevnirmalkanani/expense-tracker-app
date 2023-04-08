import { combineReducers } from "@reduxjs/toolkit";
import { noteReducers } from "./Reducers";
const combineAllReducers = combineReducers({
  noteReducers,
});

export default combineAllReducers;
