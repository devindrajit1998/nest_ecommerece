import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    mobileMenu: null,
    backdrop: false,
    modalState: null,
};

export const FunctionalSlice = createSlice({
    name: "functionalSlice",
    initialState,
    reducers: {
        toggleMobileMenu: (state, action) => {
            state.mobileMenu = action.payload;
            state.backdrop = !state.backdrop;
        },
        toggleProductModal: (state, action) => {
            state.modalState = action.payload;
            state.backdrop = !state.backdrop;
        }
    },
});

export const { toggleMobileMenu, toggleProductModal } = FunctionalSlice.actions;
export default FunctionalSlice.reducer;
