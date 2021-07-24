import { configureStore } from '@reduxjs/toolkit';
import HotelSlice from './HotelSlice';

export const store = configureStore({
  reducer: {
    hotels: HotelSlice,
  },
});
