import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/Features/authSlics';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
