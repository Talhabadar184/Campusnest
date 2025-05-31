// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // API call
// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       // Prepare payload matching your API expected structure
//       const payload = {
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         email: userData.email,
//         password: userData.password,
//         mobileNo: userData.mobileNo, 
//         gender: userData.gender,
//         userType: userData.userType,
//         address: {
//           street: userData.street,
//           city: userData.city,
//           district: userData.district,
//           state: userData.state,
//           postalCode: userData.postalCode,
//         },
      
//       };

//       const response = await axios.post(
//         'http://localhost:8000/api/register',
//         payload
//       );
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || 'Registration failed');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;
 
                                       //Actual
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Register API
// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const payload = {
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         email: userData.email,
//         password: userData.password,
//         mobileNo: userData.mobileNo,
//         gender: userData.gender,
//         userType: userData.userType,
//         address: {
//           street: userData.street,
//           city: userData.city,
//           district: userData.district,
//           state: userData.state,
//           postalCode: userData.postalCode,
//         },
//       };

//       const response = await axios.post(
//         'http://localhost:8000/api/register',
//         payload
//       );
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || 'Registration failed');
//     }
//   }
// );

// // ✅ Login API
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/login', credentials);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || 'Login failed');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     accessToken: null,
//     refreshToken: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Register
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // ✅ Login
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = {
//           email: action.payload.email,
//           firstName: action.payload.firstName,
//           lastName: action.payload.lastName,
//         };
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
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

      const response = await axios.post('http://localhost:8000/api/register', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Registration failed');
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// 🔐 Forgot Password
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/forgot-password', { email });
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.errors || 'Failed to send reset code');
    }
  }
);

// 🔐 Verify Code
export const verifyResetCode = createAsyncThunk(
  'auth/verifyResetCode',
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/verify-reset-code', { email, code });
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.errors || 'Invalid or expired code');
    }
  }
);

// 🔐 Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, code, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/reset-password', {
        email,
        code,
        password,
      });
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.errors || 'Reset failed');
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
    forgotPasswordStatus: null,
    verifyCodeStatus: null,
    resetPasswordStatus: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
      state.forgotPasswordStatus = null;
      state.verifyCodeStatus = null;
      state.resetPasswordStatus = null;
    },
  },
  extraReducers: (builder) => {
    // Register
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

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Forgot Password
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.forgotPasswordStatus = null;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordStatus = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Verify Code
    builder
      .addCase(verifyResetCode.pending, (state) => {
        state.loading = true;
        state.verifyCodeStatus = null;
        state.error = null;
      })
      .addCase(verifyResetCode.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyCodeStatus = action.payload;
      })
      .addCase(verifyResetCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Reset Password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.resetPasswordStatus = null;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetPasswordStatus = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
