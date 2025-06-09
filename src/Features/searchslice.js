// // src/Features/searchslice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filters: {
//     institution: '',
//     radius: '',
//     location: '',
//   },
// };

// const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     setSearchFilters(state, action) {
//       state.filters = action.payload;
//     },
//     clearSearchFilters(state) {
//       state.filters = {
//         institution: '',
//         radius: '',
//         location: '',
//       };
//     },
//   },
// });

// export const { setSearchFilters, clearSearchFilters } = searchSlice.actions;
// export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    filters: {
      institution: "PU",
      radius: 5, // km
      coordinates: {
        lat: 74.3535,
        lng: 31.4194,
      },
    },
  },
  reducers: {
    setSearchFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearSearchFilters: (state) => {
      state.filters = {};
    },
  },
});

export const { setSearchFilters, clearSearchFilters } = searchSlice.actions;
export default searchSlice.reducer;
