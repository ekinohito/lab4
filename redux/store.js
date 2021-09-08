import {configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from "./catalog";
import {localStorageMiddleware} from "./localStorageMiddleware";
import {cartReducer} from "./cart";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(localStorageMiddleware),
})