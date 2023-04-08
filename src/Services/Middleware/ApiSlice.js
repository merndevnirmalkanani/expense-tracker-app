import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "./ActionsApi";


const slice = createSlice({
    name: "AuthData",
    initialState:{
        list:[],
        loading:false
    },

    reducers:{
        dataRequested: (datas, action) => {
            datas.loading = true
        },
        datasReceived : (datas, action) => {
            datas.list = action.payload;
            datas.loading = false
        },
        datasRequestFailed : (datas, action) => {
            datas.loading = false
        }
    }
})

export default slice.reducer

const { dataRequested, datasReceived, datasRequestFailed } = slice.actions

const url = ""

export const LoadingData = () => (dispatch) => {
    return dispatch(
        apiCallStart({
            url,
            onStart: dataRequested.type,
            onSuccess:datasReceived.type,
            onError:datasRequestFailed.type
        })
    )
}