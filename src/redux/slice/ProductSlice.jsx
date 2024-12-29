import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = 'https://nest-api-ze4w.onrender.com/api'
const API_KEY = import.meta.env.VITE_API_KEY;

const initialState = {
    loading: false,
    singleProduct: [],
    searchData: []
}

// fetch product by id

export const fetchProductById = createAsyncThunk("fetchProductById", async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}?populate=*`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
})

// search product by name 

export const searchProductByName = createAsyncThunk("searchProductByName", async (searchTerm) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?filters[title][$containsi]=${searchTerm}&populate=*`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        clearSingleProduct: (state, action) => {
            state.singleProduct = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        });
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error);
        })
        builder.addCase(searchProductByName.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(searchProductByName.fulfilled, (state, action) => {
            state.loading = false;
            state.searchData = action.payload;
        })
        builder.addCase(searchProductByName.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error);
        })
    }
});

export default productSlice.reducer;
export const { clearSingleProduct } = productSlice.actions;