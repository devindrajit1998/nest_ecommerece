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


// update product quantity after order or cancellation

export const updateProductQuantity = createAsyncThunk("updateProductQuantity", async (orders) => {
    try {
        const responses = await Promise.all(orders?.product.map((items) => axios.put(`${BASE_URL}/products/${items.documentId}`, { data: { stock: items.stocks } }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${API_KEY}`
            }
        })));
        const responseData = responses.map((response) => response.data);
        return responseData;

    } catch (error) {
        throw error;
    }
})


// Add product review by id
export const addProductReview = createAsyncThunk("addProductReview", async ( data ) => {
    console.log(data);
    try {
        const response = await axios.put(`${BASE_URL}/products/${data.id}`, { data: { review: [data.formData] } }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        })
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
        builder.addCase(updateProductQuantity.fulfilled, (state) => {
            console.log("Update successful")
        })
        builder.addCase(updateProductQuantity.rejected, (state, action) => {
            console.log(action.error);
        })
        builder.addCase(addProductReview.fulfilled, (state) => {
            console.log("Review added successfully")
        })
    }
});

export default productSlice.reducer;
export const { clearSingleProduct } = productSlice.actions;