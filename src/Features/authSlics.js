import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API call
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Prepare payload matching your API expected structure
      const payload = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        mobileNo: userData.mobileNo, 
        gender: userData.gender,
        userType: userData.userType,
        address: {
          street: userData.street,
          city: userData.city,
          district: userData.district,
          state: userData.state,
          postalCode: userData.postalCode,
        },
      
      };

      const response = await axios.post(
        'http://localhost:8000/api/register',
        payload
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Registration failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
