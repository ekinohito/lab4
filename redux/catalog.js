import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";
import {deleteGood} from "./common";
export {deleteGood} from "./common"

const catalogSlice = createSlice({
    name: "catalog",
    initialState: [],
    reducers: {
        addGood: (state, action) => {
            state.push({...action.payload, id: nanoid()})
        },
        setCatalog: (state, action) => {
            return action.payload
        },
    },
    extraReducers: builder => builder.addCase(deleteGood, (state, action) => {
        if (action.payload.index === 0)
            state.shift()
        else
            state.splice(action.payload.index, action.payload.index)
    })
})

export const catalogReducer = catalogSlice.reducer
export const {addGood, setCatalog} = catalogSlice.actions