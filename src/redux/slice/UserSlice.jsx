import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    loginStatus: false,
    user: [],
    error: null
}

const BASE_URL = 'https://nest-api-ze4w.onrender.com'
const API_KEY = import.meta.env.VITE_API_KEY;
const REGISTER_END_POINT = "/api/auth/local/register";
const LOGIN_END_POINT = "/api/auth/local";
const FETCH_USER = "/api/users/";
const UPLOAD_IMG = "/api/upload";


export const registerUser = createAsyncThunk("registerUser", async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/local/register`, formData)

    } catch (error) {
        throw error;
    }
})

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
});


export default userSlice.reducer;