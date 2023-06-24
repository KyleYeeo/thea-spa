import { createSlice } from '@reduxjs/toolkit';

export const cartOpenSlice = createSlice({
    name: 'cartOpen',
    initialState: {
        cartIsOpen: false
    },
    reducers: {
        showCart: (state, action) => {
            state.cartIsOpen = action.payload;
        }
    }
})

export const getCartIsOpen = state => state.cartOpen.cartIsOpen;
export const { showCart } = cartOpenSlice.actions;

export default cartOpenSlice.reducer;