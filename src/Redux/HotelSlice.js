import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entries: null,
  dataLoaded: false,
};

export const getHotels = createAsyncThunk('contentful/hotels', async () => {
  const res = await axios(
    'https://weather-api-33323.herokuapp.com/cdn.contentful.com/spaces/sys7v84vi1ts/entries?content_type=windbnb',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 47VVsD-789bnvtODFjN-hYcnx7FRi6_w8mFtCPOa9s4',
      },
    }
  );
  return res.data.items;
});

export const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    dataLoaded: (state) => {
      state.dataLoaded = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
  },
});

export const { dataLoaded } = hotelSlice.actions;

export default hotelSlice.reducer;
