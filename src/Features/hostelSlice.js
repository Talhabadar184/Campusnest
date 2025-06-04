// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch all hostels
// export const fetchAllHostels = createAsyncThunk(
//   'hostel/fetchAllHostels',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/hostel-profile/');
//       return response.data;  // assuming API returns { success, data: [...] }
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const hostelSlice = createSlice({
//   name: 'hostel',
//   initialState: {
//     hostels: [],    // make sure this is an array by default
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllHostels.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllHostels.fulfilled, (state, action) => {
//         state.loading = false;
//         state.hostels = action.payload.data || []; // safe fallback
//       })
//       .addCase(fetchAllHostels.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default hostelSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ Fetch all hostels
export const fetchAllHostels = createAsyncThunk(
  'hostel/fetchAllHostels',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/api/hostel-profile/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Fetch a single hostel by ID
export const fetchHostelById = createAsyncThunk(
  'hostel/fetchHostelById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/hostel-profile/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Search hostels (based on filters like location, price, amenities)
export const searchHostels = createAsyncThunk(
  'hostel/searchHostels',
  async (searchCriteria, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/search-hostels', searchCriteria);
      return response.data.data; // Assuming response format: { success: true, data: [...] }
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const hostelSlice = createSlice({
  name: 'hostel',
  initialState: {
    hostels: [],
    selectedHostel: null,
    hostelId: null,
    loading: false,
    error: null,
    searchResults: [], // ✅ New state to store search results
  },
  reducers: {
    setHostelId: (state, action) => {
      state.hostelId = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Fetch all hostels
      .addCase(fetchAllHostels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllHostels.fulfilled, (state, action) => {
        state.loading = false;
        state.hostels = action.payload.data || [];
      })
      .addCase(fetchAllHostels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch single hostel by ID
      .addCase(fetchHostelById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHostelById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedHostel = action.payload.data || null;
      })
      .addCase(fetchHostelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Search hostels
      .addCase(searchHostels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchHostels.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload || [];
      })
      .addCase(searchHostels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export actions
export const { setHostelId, clearSearchResults } = hostelSlice.actions;

export default hostelSlice.reducer;
