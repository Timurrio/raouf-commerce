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
            let cartItem = state.items.find(item => item.item.id === action.payload.item.id)
            if (!cartItem) {
                state.items.push(action.payload)
            } else {
                cartItem.quantity += action.payload.quantity
            }
        },
        removeCartItem: (state, action) => {
            state.items = state.items.filter((item) => item.item.id !== action.payload.id)
        },
        changeCartItemQuantity: (state, action) => {
            if (action.payload.newQuantity >= 1) {
                state.items = state.items.map((item) => (
                    item.item.id === action.payload.item.id
                        ?
                        { item: { ...item.item }, quantity: action.payload.newQuantity }
                        :
                        item
                ))
            }
        }
    },
    initialState: initialState
})

export const { toggleIsActive, addCartItem, removeCartItem, changeCartItemQuantity } = cartSlice.actions
export default cartSlice.reducer