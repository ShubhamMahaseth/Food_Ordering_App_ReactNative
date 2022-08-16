import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedItems: {items: [], restaurantName: [], menuItem: []},
};

const cartSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.selectedItems.items.push(action.payload.price);
      state.selectedItems.restaurantName.push(action.payload.title);
      state.selectedItems.menuItem.push(action.payload);
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
      const menuData = state.selectedItems.menuItem.filter(
        item => item.title !== action.payload.title,
      );
      state.selectedItems.menuItem = menuData;
    },
  },
});

export const {increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;
