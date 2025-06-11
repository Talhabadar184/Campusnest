// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/chats';

// // Thunk to get messages for a room
// export const getMessages = createAsyncThunk(
//   'chat/getMessages',
//   async (roomId, { getState, rejectWithValue }) => {
//     try {
//         const token = getState().auth.accessToken;
//         console.log("Token being used:", token); // ← Add this
        
//       if (!token) throw new Error('No token found');

//       const response = await axios.get(`${API_URL}/${roomId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Get messages error:', error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Thunk to send a message to a room
// export const sendMessage = createAsyncThunk(
//   'chat/sendMessage',
//   async ({ roomId, messageData }, { getState, rejectWithValue }) => {
//     try {
//       const token = getState().auth.accessToken;
//       if (!token) throw new Error('No token found');

//       const response = await axios.post(`${API_URL}/${roomId}`, messageData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       return response.data;
//     } catch (error) {
//       console.error('Send message error:', error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Initial state
// const initialState = {
//   chat: null,
//   loading: false,
//   error: null,
// };

// // Slice
// const chatSlice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     clearChat: (state) => {
//       state.chat = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Get messages
//       .addCase(getMessages.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getMessages.fulfilled, (state, action) => {
//         state.loading = false;
//         state.chat = action.payload;
//       })
//       .addCase(getMessages.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Send message
//       .addCase(sendMessage.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(sendMessage.fulfilled, (state, action) => {
//         state.loading = false;
//         state.chat = action.payload.chat; // Update chat with new message
//       })
//       .addCase(sendMessage.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions and reducer
// export const { clearChat } = chatSlice.actions;
// export default chatSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/chats';

// Thunk to get messages for a room
export const getMessages = createAsyncThunk(
  'chat/getMessages',
  async (roomId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;
      console.log("Getting messages for room:", roomId);
      console.log("Token being used:", token ? "Token exists" : "No token");
      
      if (!token) throw new Error('No token found');

      const response = await axios.get(`${API_URL}/${roomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log("Messages response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Get messages error:', error.response?.data || error.message);
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
      console.log("Sending message to room:", roomId);
      console.log("Message data:", messageData);
      
      if (!token) throw new Error('No token found');

      const response = await axios.post(`${API_URL}/${roomId}`, messageData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log("Send message response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Send message error:', error.response?.data || error.message);
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
    addMessageToChat: (state, action) => {
      // For real-time message updates from socket
      if (state.chat && state.chat.messages) {
        state.chat.messages.push(action.payload);
      }
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
        state.error = null;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Send message
      .addCase(sendMessage.pending, (state) => {
        // Don't set loading to true for sending messages to avoid UI blocking
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        // Update the entire chat object with the response
        state.chat = action.payload.chat;
        state.error = null;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearChat, addMessageToChat } = chatSlice.actions;
export default chatSlice.reducer;