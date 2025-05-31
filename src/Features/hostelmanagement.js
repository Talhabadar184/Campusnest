import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL
const API_BASE = "http://localhost:8000/api";

// 🔹 Register Hostel (with multipart/form-data)
export const registerHostel = createAsyncThunk(
  "hostel/registerHostel",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(`${API_BASE}/register-hostel`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Registration failed");
    }
  }
);

// 🔹 Search Hostels (location, price, amenities, etc.)
export const searchHostels = createAsyncThunk(
  "hostel/searchHostels",
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE}/search-hostels`, filters);
      return response.data.data; // Only return hostels
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Search failed");
    }
  }
);

const hostelManagementSlice = createSlice({
  name: "hostelManagement",
  initialState: {
    hostels: [],
    registeredHostel: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearRegisteredHostel: (state) => {
      state.registeredHostel = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerHostel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerHostel.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredHostel = action.payload.hostel;
      })
      .addCase(registerHostel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Search
    builder
      .addCase(searchHostels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchHostels.fulfilled, (state, action) => {
        state.loading = false;
        state.hostels = action.payload;
      })
      .addCase(searchHostels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRegisteredHostel } = hostelManagementSlice.actions;
export default hostelManagementSlice.reducer;
