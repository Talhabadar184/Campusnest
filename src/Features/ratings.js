import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to submit feedback
export const submitFeedback = createAsyncThunk(
  "ratings/submitFeedback",
  async ({ hostelId, ratings, recommended, comment, token }, { rejectWithValue }) => {
    try {
      const response =  await axios.post(
  `http://localhost:8000/api/hostel/${hostelId}/feedback`,
  { ratings, recommended, comment },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Something went wrong");
    }
  }
);

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {
    loading: false,
    error: null,
    successMessage: null,
    entries: [], // ✅ Add this line
  },
  reducers: {
    addFeedback: (state, action) => {
      state.entries.push(action.payload); // ✅ Store feedback
    },
    clearFeedbackState: (state) => {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(submitFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(submitFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Add this export:
export const { addFeedback, clearFeedbackState } = ratingsSlice.actions;
export default ratingsSlice.reducer;