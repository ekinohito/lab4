import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";

const toastsSlice = createSlice({
    name: "toasts",
    initialState: [],
    reducers: {
        addToast: (state, action) => {
            state.push(action.payload)
        },
        removeToast: (state, action) => {
            console.log(action)
            if (action.payload === 0)
                state.shift()
            else
                state.splice(action.payload, action.payload)
        },
    }
})

export const toastsReducer = toastsSlice.reducer
export const {addToast, removeToast} = toastsSlice.actions