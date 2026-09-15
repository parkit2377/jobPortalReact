import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    initialState : {isLoggedIn : false , token : null},

    reducers : {
        loggedIn : (state , action) => {
            console.log(action.payload);
            
            state.isLoggedIn = true;
            state.token = action.payload?.token
        },
        logout : (state , action) => {
            state.isLoggedIn = false;
            state.token = null
        }
    }
})


export const {loggedIn , logout} = authSlice.actions

export default authSlice.reducer