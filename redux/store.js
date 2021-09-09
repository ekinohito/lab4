import {configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from "./catalog";
import {localStorageMiddleware} from "./localStorageMiddleware";
import {cartReducer} from "./cart";
import {toastsReducer} from "./toasts";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        cart: cartReducer,
        toasts: toastsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(localStorageMiddleware),
})