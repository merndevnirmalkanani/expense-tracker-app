import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ApiData from "../Services/Middleware/ApiData";
import combineAllReducers from "../Services/Reducers/CombineReducers";

export const Store = configureStore({
    reducer:combineAllReducers,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ApiData)
})