import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Create a booking
export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (bookingData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;

      console.log(token);
      if (!token) throw new Error("No token found in Redux store");

      const response = await axios.post(
        `${API_URL}/bookings`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Booking error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Process booking payment
export const processPayment = createAsyncThunk(
  "booking/processPayment",
  async (paymentData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;// <-- Consistent here too
      if (!token) throw new Error("No token found in Redux store");

      const response = await axios.post(`${API_URL}/bookings/pay`, paymentData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      console.error("Payment error:", err);
      return rejectWithValue(err.response?.data?.message || "Payment failed");
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingResult: null,
    paymentResult: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearBookingState: (state) => {
      state.bookingResult = null;
      state.paymentResult = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
  console.log("Booking Payload:", action.payload); // Should contain full booking
  state.loading = false;
  state.bookingResult = action.payload.booking; // update this if you wrap it in `.booking`
})

      
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(processPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentResult = action.payload;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBookingState } = bookingSlice.actions;
export default bookingSlice.reducer;
