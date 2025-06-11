// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage by default
import { combineReducers } from 'redux';

import authReducer from '../src/Features/authSlics';
import hostelReducer from '../src/Features/hostelSlice';
import bookingReducer from '../src/Features/BookingSlice';
import ratingReducer from './Features/ratingSlice';
import chatReducer from '../src/Features/chatSlice';
import registerHostelReducer from './Features/registerhostelslice';

const rootReducer = combineReducers({
  auth: authReducer,
  hostel: hostelReducer,
  booking: bookingReducer,
  ratings: ratingReducer,
  chat: chatReducer,
  registerHostel: registerHostelReducer,
  
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // only persist auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
