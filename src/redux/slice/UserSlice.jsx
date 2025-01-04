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
        return response.data;
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
        return response.data.user;
    } catch (error) {
        throw error;
    }
})

// get user by id

export const fetchUserById = createAsyncThunk("fetchUserById", async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/${userId}?populate=*`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});

// manage cart after login (calculation on layout)

export const updateUserCart = createAsyncThunk("updateCart", async ({ data, userId }) => {
    // console.log({ data, userId })
    try {
        const response = await axios.put(`${BASE_URL}/api/users/${userId}`, data, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
})


// create order 

export const placeOrder = createAsyncThunk("placeOrder", async ({ orderData, userId }) => {
    // console.log({ orderData, userId })
    try {
        const promise = axios.put(`${BASE_URL}/api/users/${userId}`, orderData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        notifier.asyncBlock(promise, "order created succesfully!");
        const response = await promise;
        return response.data;

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
            localStorage.removeItem("isSession");
            localStorage.removeItem("user");
        },
        setSession: (state, action) => {
            state.isSession = action.payload.session;
            state.user = action.payload.user;
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
                localStorage.setItem("isSession", state.isSession);
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload || "An unknown error occurred.";
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.error = action.payload || "An unknown error occurred.";
            })
            .addCase(updateUserCart.fulfilled, (state, action) => {
                // state.user = action.payload;
                // console.log(action.payload);
                // alert();
            })
            .addCase(updateUserCart.rejected, (state, action) => {
                state.error = action.payload || "An unknown error occurred.";
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })

    }
});


export default userSlice.reducer;
export const { logOut, setSession } = userSlice.actions;