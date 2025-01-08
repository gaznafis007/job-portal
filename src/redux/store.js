import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import { baseApi } from "./api/baseApi";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})