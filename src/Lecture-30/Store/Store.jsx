import { configureStore } from "@reduxjs/toolkit";
import counterRedux from "../CounterSlice"
import ApiSlice from "../ApiSlice"
import StudentReducer from "../../Lecture-32/StudentReducer";

const store = configureStore({
    reducer:{
        counter :counterRedux,
        users:ApiSlice,
        students: StudentReducer,
        
    }
})

export default store