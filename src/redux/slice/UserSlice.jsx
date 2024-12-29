import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    loginStatus: false,
    user: [],
    error: null
}

const REGISTER_END_POINT = "/api/auth/local/register";
const LOGIN_END_POINT = "/api/auth/local";
const FETCH_USER = "/api/users/";
const UPLOAD_IMG = "/api/upload";


export const registerUser = createAsyncThunk("registerUser", async (formData) => {
    try {

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