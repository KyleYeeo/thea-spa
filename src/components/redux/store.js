import { configureStore } from '@reduxjs/toolkit';
import cartOpen from './cartOpenSlice';
import itemsCategorySlice from './itemsCategorySlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        cartOpen: cartOpen,
        itemsCategorySlice: itemsCategorySlice,
        cart: cart,
    }
})