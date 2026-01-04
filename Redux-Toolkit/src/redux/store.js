import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice';

// first we create configureStore -> and in which we have reducers 
// syntax
export const store = configureStore({
    reducer: {
        // once we create reducers in slice import them here in store so available to everyone
        counter: counterReducer
    }
});

// once we create reducers so need provide them globally -> means any component can access

// for that go to main.jsx and "provide store" as global

// Then next we need to create slices/ features