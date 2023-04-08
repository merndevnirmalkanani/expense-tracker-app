import { SEND_NOTE } from "../Actions/ConstantActions";

const Initial_State = {
    notesData:[]
}

export const noteReducers = (state = Initial_State, action) => {
    switch (action.type) {
        case SEND_NOTE:
                return{
                    ...state,
                    notesData:[...state.notesData, action.data]
                }
        default:
            return state
    }
}