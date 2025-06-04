// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to register a hostel
// export const registerHostel = createAsyncThunk(
//   'hostel/register',
//   async ({ formData }, { getState, rejectWithValue }) => {
//     try {
//       const token = getState().auth.user?.token;

//       const response = await axios.post(
//         'http://localhost:8000/api/register-hostel',
//         formData,
//         {
//           headers: {    
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.error || 'Hostel registration failed.'
//       );
//     }
//   }
// );

// const registerHostelSlice = createSlice({
//   name: 'registerHostel',
//   initialState: {
//     hostel: null,
//     loading: false,
//     success: false,
//     error: null,
//   },
//   reducers: {
//     resetHostelState: (state) => {
//       state.hostel = null;
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerHostel.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(registerHostel.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.hostel = action.payload.hostel;
//       })
//       .addCase(registerHostel.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetHostelState } = registerHostelSlice.actions;
// export default registerHostelSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerHostel = createAsyncThunk(
  'hostel/register',
  async ({ formData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/register-hostel',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || 'Hostel registration failed.'
      );
    }
  }
);

const registerHostelSlice = createSlice({
  name: 'registerHostel',
  initialState: {
    hostel: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetHostelState: (state) => {
      state.hostel = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerHostel.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(registerHostel.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.hostel = action.payload.hostel;
      })
      .addCase(registerHostel.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetHostelState } = registerHostelSlice.actions;
export default registerHostelSlice.reducer;
