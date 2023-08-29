import { createSlice } from "@reduxjs/toolkit";
import { Iitem } from "../../types/Iitem";

export interface cartSliceState {
    isActive: boolean,
    items: Iitem[]
}

const initialState: cartSliceState = {
    isActive: false,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    reducers: {
        toggleIsActive: (state) => {
            state.isActive = !state.isActive
        },
        addCartItem: (state, action) => {
            state.items.push(action.payload)
        }
    },
    initialState: initialState
})

export const { toggleIsActive, addCartItem } = cartSlice.actions
export default cartSlice.reducer