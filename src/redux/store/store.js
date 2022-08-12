import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../cartSlice/cartSlice';

const store = configureStore({
  reducer: {cartSlice},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
