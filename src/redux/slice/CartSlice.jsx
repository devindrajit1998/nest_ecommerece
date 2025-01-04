import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading: false,
    cartData: [],
    wishlist: [],
    subTotal: 0,
    error: null
}


const BASE_URL = 'https://nest-api-ze4w.onrender.com/api'
const API_KEY = import.meta.env.VITE_API_KEY;



export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const findDuplicate = state.cartData?.find((curElem) => curElem.documentId == item.data.documentId);
            if (findDuplicate) {
                state.cartData = state.cartData?.map((curElem) =>
                    curElem.documentId == item.data.documentId ? { ...curElem, inCart: curElem.inCart + item.quant } : curElem)
            } else {
                state.cartData?.push({ ...item.data, inCart: item.quant });
            }
            // set cart to localStorage
            localStorage.setItem("cartData", JSON.stringify(state.cartData));
        },
        updateLocalCart: (state, action) => {
            state.cartData = action.payload;
        },
        removeSingleItem: (state, action) => {
            const itemId = action.payload;
            state.cartData = state.cartData.filter((items) => items.documentId !== itemId);
            // set cart to localStorage
            localStorage.setItem("cartData", JSON.stringify(state.cartData));
        },
        clearCart: (state) => {
            state.cartData = [];
            localStorage.removeItem("cartData");
        },
        claculateSubtotal: (state) => {
            state.subTotal = state.cartData?.reduce((acc, value) => {
                return acc + ((value.price - value.price * value.offer * 0.01) * value.inCart)
            }, 0);
        },
        addToWishlist: (state, action) => {
            const item = action.payload;
            const findDuplicate = state.wishlist?.find((curElem) => curElem.documentId == item.documentId);
            if (findDuplicate) {
                alert("Already added to wishlist");
            } else {
                state.wishlist?.push(item);
            }
        }

    },
});



export default cartSlice.reducer;
export const { addToCart, updateLocalCart, removeSingleItem, clearCart, claculateSubtotal, addToWishlist } = cartSlice.actions;