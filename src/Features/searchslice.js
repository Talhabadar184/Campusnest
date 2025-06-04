// src/redux/thunks/searchHostelsThunk.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchHostelsThunk = createAsyncThunk(
  'hostels/search',
  async (searchData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/search-hostels', searchData);
      return response.data.data; // assuming success is true and data contains hostels
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || 'Search failed');
    }
  }
);
