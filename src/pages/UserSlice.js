import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser' ,
    async(userCreditionals) => {
        const request = await axios.post('http://localhost:8080/login' , userCreditionals)
        return request.data
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser' ,
    async(userCreditionals) => {
        const request = await axios.post('http://localhost:8080/register' , userCreditionals)
        return request.data
    }
);

const UserSlice = createSlice({
    name : 'user',
    initialState : {
        user : null,
        loading : false,
        errorRegister : null,
        errorLogin : null
    },
    extraReducers:(builder) => {
        builder
        .addCase(loginUser.pending , (state) => {
            state.loading = true;
            state.user = null;
            state.errorRegister = null;
            state.errorLogin = null;
        })
        .addCase(loginUser.fulfilled , (state , action) => {
            state.loading = false;
            state.user = action.payload;
            state.errorRegister = null;
            state.errorLogin = null;
        })
        .addCase(loginUser.rejected , (state , action) => {
            state.loading = false;
            state.user = null;
            if (action.error.message === 'Request failed with status code 422' || action.error.message === 'Request failed with status code 404' ) {
                state.errorLogin = 'Acess denied! Invalid Creditionals';
                state.errorRegister = null;
            }else{
                state.errorLogin = action.error.message;
                state.errorRegister = null;
            }
        })
        .addCase(registerUser.pending , (state) => {
            state.loading = true;
            state.user = null;
            state.errorRegister = null;
            state.errorLogin = null;
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.loading = false;
            state.user = action.payload;
            state.errorRegister = null;
            state.errorLogin = null;

        })
        .addCase(registerUser.rejected , (state , action) => {
            state.loading = false;
            state.user = null;
            if (action.error.message === 'Request failed with status code 422') {
                state.errorRegister = 'Acess denied! Invalid Creditionals';
                state.errorLogin = null;
            }else if (action.error.message === 'Request failed with status code 401') {
                state.errorRegister = 'Email is Already Registered';
                state.errorLogin = null;
            }else{
                state.errorRegister = action.error.message;
                state.errorLogin = null;
            }
        })
    }
})

export default UserSlice.reducer;