import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AWN from "awesome-notifications";
import axios from "axios";



const notifier = new AWN();
const initialState = {
    loading: false,
    isSession: false,
    user: [],
    error: null
}

const BASE_URL = 'https://nest-api-ze4w.onrender.com'
const API_KEY = import.meta.env.VITE_API_KEY;
const REGISTER_END_POINT = "/api/auth/local/register";
const LOGIN_END_POINT = "/api/auth/local";
const FETCH_USER = "/api/users/";
const UPLOAD_IMG = "/api/upload";

// register user
export const registerUser = createAsyncThunk("registerUser", async (formData) => {
    try {
        const promise = axios.post(`${BASE_URL}/api/auth/local/register`, formData);
        notifier.asyncBlock(promise, "Successfully registered!");
        const response = await promise;
        return response;
    } catch (error) {
        throw error;
    }
})


// login user

export const loginUser = createAsyncThunk("logionUser", async (formData) => {
    try {
        const promise = axios.post(`${BASE_URL}/api/auth/local`, formData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        })
        notifier.asyncBlock(promise, "Login successfully!");
        const response = await promise;
        return response;
    } catch (error) {
        throw error;
    }
})




export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logOut: (state) => {
            state.isSession = false;
            state.user = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload || "An unknown error occurred.";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isSession = true;
            })
    }
});


export default userSlice.reducer;
export const { logOut } = userSlice.actions;