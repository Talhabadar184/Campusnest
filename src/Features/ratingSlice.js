// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to submit feedback
// // export const submitFeedback = createAsyncThunk(
// //   'rating/submitFeedback',
// //   async (payload, { getState, rejectWithValue }) => {
// //     try {
// //       const state = getState();

// //       console.log('State in thunk:', state);

// //       const token = state.auth.accessToken;
// //       const hostelId = state.hostel.selectedHostel?._id;

// //       console.log('Token:', token);
// //       console.log('HostelId:', hostelId);

// //       if (!token) {
// //         return rejectWithValue('No auth token found');
// //       }
// //       if (!hostelId) {
// //         return rejectWithValue('No hostel ID found');
// //       }

// //       const response = await axios.post(
// //         `http://localhost:8000/api/hostel/${hostelId}/feedback`,
// //         payload,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(
// //         error.response?.data?.message || 'Something went wrong'
// //       );
// //     }
// //   }
// // );

// export const submitFeedback = createAsyncThunk(
//   "rating/submitFeedback",
//   async ({ payload, hostelId }, { getState, rejectWithValue }) => {
//     try {
//       const token = getState().auth.accessToken;
//       if (!token) throw new Error("No token found");
//       if (!hostelId) throw new Error("No hostelId found");

//       const response = await axios.post(
//         `http://localhost:8000/api/hostel/${hostelId}/feedback`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const ratingSlice = createSlice({
//   name: 'rating',
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//   },
//   reducers: {
//     resetFeedbackState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitFeedback.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(submitFeedback.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//         state.error = null;
//       })
//       .addCase(submitFeedback.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetFeedbackState } = ratingSlice.actions;
// export default ratingSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Submit feedback thunk
export const submitFeedback = createAsyncThunk(
  "rating/submitFeedback",
  async ({ payload, hostelId }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;
      if (!token) throw new Error("No token found");
      if (!hostelId) throw new Error("No hostelId found");

      const response = await axios.post(
        `${API_URL}/hostel/${hostelId}/feedback`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch feedback thunk
export const fetchFeedbackByHostelId = createAsyncThunk(
  "rating/fetchFeedbackByHostelId",
  async (hostelId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;

      const response = await axios.get(`${API_URL}/hostel/${hostelId}/feedback`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data; // expects feedback, totalReviews, averageRating
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const ratingSlice = createSlice({
  name: 'rating',
  initialState: {
    loading: false,
    success: false,
    error: null,
    feedbackList: [],
    totalReviews: 0,
    averageRating: 0,
  },
  reducers: {
    resetFeedbackState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.feedbackList = [];
      state.totalReviews = 0;
      state.averageRating = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit feedback cases
      .addCase(submitFeedback.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitFeedback.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(submitFeedback.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Fetch feedback cases
      .addCase(fetchFeedbackByHostelId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeedbackByHostelId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.feedbackList = action.payload.feedback || [];
        state.totalReviews = action.payload.totalReviews || 0;
        state.averageRating = action.payload.averageRating || 0;
      })
      .addCase(fetchFeedbackByHostelId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetFeedbackState } = ratingSlice.actions;
export default ratingSlice.reducer;
