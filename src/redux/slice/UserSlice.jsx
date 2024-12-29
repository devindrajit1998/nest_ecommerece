import { createSlice } from "@reduxjs/toolkit"

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

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
});


export default userSlice.reducer;