import {createSlice} from '@reduxjs/toolkit';

const initialState = {selectedItems: {items: [], restaurantName: []}};

const cartSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.selectedItems.items.push(action.payload.price);
      state.selectedItems.restaurantName.push(action.payload.title);
    },
    decrement: (state, action) => {
      const filterPrice = state.selectedItems.items.filter(
        item => item !== action.payload.price,
      );
      state.selectedItems.items = filterPrice;
      const filterData = state.selectedItems.restaurantName.filter(
        item => item !== action.payload.title,
      );
      state.selectedItems.restaurantName = filterData;
    },
  },
});

export const {increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;
