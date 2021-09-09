import {createSlice} from "@reduxjs/toolkit";
import {deleteGood} from "./catalog";

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
        },
        clearCart: state => {
            return {}
        }
    },
    extraReducers: builder => builder.addCase(deleteGood, (state, action) => {
        delete state[action.payload.id]
    })
})

export const cartReducer = cartSlice.reducer
export const {addItem, removeItem, clearCart} = cartSlice.actions