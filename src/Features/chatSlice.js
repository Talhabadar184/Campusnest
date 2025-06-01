import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/chats';

// Thunk to get messages for a room
export const getMessages = createAsyncThunk(
  'chat/getMessages',
  async (roomId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;
      if (!token) throw new Error('No token found');

      const response = await axios.get(`${API_URL}/${roomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Get messages error:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk to send a message to a room
export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ roomId, messageData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;
      if (!token) throw new Error('No token found');

      const response = await axios.post(`${API_URL}/${roomId}`, messageData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Send message error:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  chat: null,
  loading: false,
  error: null,
};

// Slice
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearChat: (state) => {
      state.chat = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get messages
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.chat = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Send message
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.chat = action.payload.chat; // Update chat with new message
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearChat } = chatSlice.actions;
export default chatSlice.reducer;
