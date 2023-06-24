import { createSlice } from '@reduxjs/toolkit';
import { dataItems } from '../Shop/Items/dataItems';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        items: dataItems,
        totalCost: 0,
        totalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let itemIndex = state.cartItems.findIndex((el) => el.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            }
            else {
                state.cartItems.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(el => {
                if (el.id === action.payload) {
                    return {...el, quantity: el.quantity + 1};
                }
                return el;
            })
        },
        decreaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(el => {
                if (el.quantity === 1) return {...el, quantity: el.quantity};
                if (el.id === action.payload) {
                    return {...el, quantity: el.quantity - 1};
                }
                return el;
            })
        },
        getSubtotal: (state) => {
            for (let i = 0; i < state.cartItems.length; i++) {
                let itemTotal = state.cartItems[i].price * state.cartItems[i].quantity;
                state.cartItems[i].subtotal = itemTotal;
            }
        },
        getTotalCost: (state) => {
            let totalCost = state.cartItems.reduce((total, cartItems) => {
                const itemsTotal = cartItems.price * cartItems.quantity;
                total += itemsTotal;
                return total;
            }, 0);
            state.totalCost = totalCost;
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(el => {
                return el.id !== action.payload
            })
        },
        clearAll: (state) => {
            state.cartItems = [];
        },
        getTotalQuantity: (state) => {
            let totalQty = state.cartItems.reduce((total, cartItems) => {
                return total += cartItems.quantity;
            }, 0);
            state.totalQuantity = totalQty;
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, getSubtotal, getTotalCost, removeItem, clearAll, getTotalQuantity } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export const getCost = state => state.cart.totalCost;
export const getQuantity = state => state.cart.totalQuantity;
export default cartSlice.reducer;