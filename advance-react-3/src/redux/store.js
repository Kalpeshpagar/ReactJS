import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './slices/CounterSlice'

// global state where all data store
export const store = configureStore({
    reducer: {
        counter:CounterSlice
    },
})