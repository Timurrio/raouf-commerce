import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../types/ICartItem";


export interface cartSliceState {
    isActive: boolean,
    items: ICartItem[]
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
        },
        removeCartItem: (state, action) => {
            state.items.filter((item) => item !== action.payload.id)
        }
    },
    initialState: initialState
})

export const { toggleIsActive, addCartItem, removeCartItem } = cartSlice.actions
export default cartSlice.reducer