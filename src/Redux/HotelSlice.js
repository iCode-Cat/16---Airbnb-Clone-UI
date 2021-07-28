import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entries: null,
  dataLoaded: false,
  popup: true,
<<<<<<< HEAD
=======
  tabName: 'location',
  selectedLocation: '',
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
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
    popupToggle: (state) => {
      state.popup = !state.popup;
    },
<<<<<<< HEAD
=======
    setTabName: (state, action) => {
      state.tabName = action.payload;
    },
    setLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
  },
  extraReducers: (builder) => {
    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
  },
});

<<<<<<< HEAD
export const { dataLoaded, popupToggle } = hotelSlice.actions;
=======
export const { dataLoaded, popupToggle, setTabName, setLocation } =
  hotelSlice.actions;
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df

export default hotelSlice.reducer;
