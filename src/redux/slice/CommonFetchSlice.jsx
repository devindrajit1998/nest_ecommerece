import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading: false,
    menuData: [],
    bannerData: [],
    categoryData: [],
    singleCategory: [],
    subCategoryData: [],
    subCategoryProducts: [],
    // baseUrl: "https://nest-api-04r6.onrender.com",
}



const BASE_URL = 'https://nest-api-ze4w.onrender.com/api'
const API_KEY = import.meta.env.VITE_API_KEY;

// fetch banner
export const fetchBanner = createAsyncThunk("fetchBanner", async () => {
    try {
        const response = await axios.get(`${BASE_URL}/heroes?populate=*`, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
})
// fetch all category

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories?populate=*`, {
            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
})

// fetch category by slug

export const fetchCategoryBySlug = createAsyncThunk(
    "fetchCategoryBySlug",
    async (slug) => {
        try {
            const response = await axios.get(`${BASE_URL}/categories?filters[slug][$eq]=${slug}`, {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`
                }
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)

// fetch subcategory by category id

export const fetchSubcategoryByCategoryId = createAsyncThunk(
    "fetchSubcategoryByCategoryId",
    async (categoryId) => {
        try {
            if (categoryId) {
                const response = await axios.get(`${BASE_URL}/categories/${categoryId}?populate=*`, {
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`
                    }
                })
                return response.data.data.subcategories;
            }
        } catch (error) {
            throw error;
        }
    }
)

// fetch products by subcategory

export const fetchProductBySubcategoryId = createAsyncThunk(
    "fetchProductBySubcategoryId",
    async (subcategoryId) => {
        try {
            if (subcategoryId) {
                const response = await axios.get(`${BASE_URL}/subcategories/${subcategoryId}?populate[products][populate]=image`, {
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`
                    }
                })
                // console.log(response.data);
                return response.data.data.products;
            }
        } catch (error) {
            throw error;
        }
    }
)

export const commonFetchSlice = createSlice({
    name: "commonFetchSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanner.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBanner.fulfilled, (state, action) => {
                state.loading = false;
                state.bannerData = action.payload;
            })
            .addCase(fetchBanner.rejected, (state, action) => {
                state.loading = false;
                console.error("Error fetching banner data:", action.error);
            })
            .addCase(fetchCategory.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                // state.loading = false;
                state.categoryData = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                // state.loading = false;
                console.error("Error fetching category data:", action.error);
            })
            .addCase(fetchCategoryBySlug.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchCategoryBySlug.fulfilled, (state, action) => {
                // state.loading = false;
                state.singleCategory = action.payload;
            })
            .addCase(fetchCategoryBySlug.rejected, (state, action) => {
                // state.loading = false;
                console.error("Error fetching single category data:", action.error);
            })
            // .addCase(fetchSubcategoryByCategoryId.pending, (state) => {
            //     state.loading = true;
            // })
            .addCase(fetchSubcategoryByCategoryId.fulfilled, (state, action) => {
                // state.loading = false;
                state.subCategoryData = action.payload;
            })
            .addCase(fetchSubcategoryByCategoryId.rejected, (state, action) => {
                // state.loading = false;
                console.error("Error fetching subcategory data:", action.error);
            })
            .addCase(fetchProductBySubcategoryId.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchProductBySubcategoryId.fulfilled, (state, action) => {
                // state.loading = false;
                state.subCategoryProducts = action.payload;
            })
            .addCase(fetchProductBySubcategoryId.rejected, (state, action) => {
                // state.loading = false;
                console.error("Error fetching subcategory product data:", action.error);
            })
    }
})



export default commonFetchSlice.reducer;