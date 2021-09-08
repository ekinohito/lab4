import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const catalogSlice = createSlice({
    name: "catalog",
    initialState: [],
    reducers: {
        addGood: (state, action) => {
            state.push({...action.payload, id: nanoid()})
        },
        deleteGood: (state, action) => {
            if (action.payload === 0)
                state.shift()
            else
                state.splice(action.payload, action.payload)
        },
        setCatalog: (state, action) => {
            return action.payload
        },
    }
})

export const catalogReducer = catalogSlice.reducer
export const {addGood, deleteGood, setCatalog} = catalogSlice.actions