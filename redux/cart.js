import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addItem: (state, action) => {
            if (state[action.payload]) {
                state[action.payload] += 1
            } else {
                state[action.payload] = 1
            }
        },
        removeItem: (state, action) => {
            if (state[action.payload] && state[action.payload] > 1) {
                state[action.payload] -= 1
            } else {
                delete state[action.payload]
            }
        }
    }
})

export const cartReducer = cartSlice.reducer
export const {addItem, removeItem} = cartSlice.actions