import { createSlice } from '@reduxjs/toolkit';

export const itemsCatgSlice = createSlice({
    name: 'itemsCategorySlice',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        filterTags: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const { filterCategory } = itemsCatgSlice.actions;
export const getSelectedCategory = state => state.itemsCategorySlice.selectedCategory;

export const { filterTags } = itemsCatgSlice.actions;
export const getSelectedTag = state => state.itemsCategorySlice.selectedCategory;

export default itemsCatgSlice.reducer;
