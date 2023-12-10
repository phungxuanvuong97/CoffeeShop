import { CartModel } from "@/types/carts/Cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [] as CartModel[]
  },
  reducers: {
    addCart(state, action: PayloadAction<CartModel>) {
      state.carts = [...state.carts, action.payload]
    }
  }
})  

export const { addCart } = cartSlice.actions
export default cartSlice.reducer