import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  users: [],
};

const apiSlice =createSlice({
    name:"users",
    initialState,
    reducers:{
        getUser:(state,action)=>{
            state.users=action.payload
        }
    }
})

export const { getUser } = apiSlice.actions;
export default apiSlice.reducer;