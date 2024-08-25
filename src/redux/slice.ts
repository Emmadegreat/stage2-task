//import { Products } from '@/components/products';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// src/redux/cartSlice.js



interface Product{
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

interface cartState{
    products:Product[];
}

const initialState:cartState = {
  products:[]
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string; name: string; price: number }>) => {
      const existingProduct = state.products.find((product) => product.id == action.payload?.id);
      if (existingProduct) {
        //existingProduct.quantity += 1;
        existingProduct.totalPrice += action.payload?.price;
      } else {
        state.products.push({ ...action.payload, quantity: 1, totalPrice: action.payload?.price });
      }
    },
    delCart: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.products = [];
    },
    increaseItem: (state, action) => {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        product.totalPrice += action.payload.price;
      }
    },
    decreaseItem: (state, action) => {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalPrice -= action.payload.price;
      }
    },
  },
});

export const { addToCart, delCart, clearCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
