import axios from "axios";
import * as Actions from "./ActionsApi";

const ApiData =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    const { url, method, data, onStart, onSuccess, onError, isHttpsAction } =
      action;

    if (!isHttpsAction) return next(action);

    if (onStart)
      dispatch({
        type: onStart,
      });

    next(action);

    try{
        const response = await axios.request({
            baseURL: "https://expense-tracker-app-team-default-rtdb.asia-southeast1.firebasedatabase.app/", //dburl
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            url,
            method,
            data
        });

        dispatch(Actions.apiCallSuccess(response.data))

        if (onSuccess) dispatch({
            type: onSuccess,
            payload: response.data
        })
    } catch(error) {
        dispatch(Actions.apiCallError(error.message))

        if (onError) dispatch({
            type: onError,
            payload: error.message
        })
    }
  };

  export default ApiData