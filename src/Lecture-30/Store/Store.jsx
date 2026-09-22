import { configureStore } from "@reduxjs/toolkit";
import counterRedux from "../CounterSlice"
import ApiSlice from "../ApiSlice"

const store = configureStore({
    reducer:{
        counter :counterRedux,
        users:ApiSlice,
    }
})

export default store