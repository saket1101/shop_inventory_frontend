const {createSlice} = require("@reduxjs/toolkit");

const  initialState = {
    user:null,
    isLoading:false,
    error:null
}

 export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.user = action.payload;
        },
        logout:(state,action) => {
            state.user = null;
        }
    }
})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer