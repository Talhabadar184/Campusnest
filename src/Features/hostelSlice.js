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

const hostelSlice = createSlice({
  name: 'hostel',
  initialState: {
    hostels: [],
    filteredHostels: [],
    selectedHostel: null,
    hostelId: null,
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setHostelId: (state, action) => {
      state.hostelId = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredHostels = state.hostels.filter((hostel) =>
        hostel.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.filteredHostels = state.hostels;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHostels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllHostels.fulfilled, (state, action) => {
        state.loading = false;
        const hostels = action.payload.data || [];
        state.hostels = hostels;
        state.filteredHostels = hostels; // ✅ set filteredHostels initially
      })
      .addCase(fetchAllHostels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

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
      });
  },
});

export const { setHostelId, setSearchTerm, clearSearch } = hostelSlice.actions;

export default hostelSlice.reducer;
