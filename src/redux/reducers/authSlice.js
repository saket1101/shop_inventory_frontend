import {createSlice} from '@reduxjs/toolkit'
const  initialState = {
    user:null,
    isLoading:false,
    error:null
}

 export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action) => {
            state.user = action.payload;
        },
        logout:(state,action) => {
            state.user = null;
        }
    }
})

export const {setCredentials,logout} = authSlice.actions;

export default authSlice.reducer