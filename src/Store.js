// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/Features/authSlics';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage by default
import { combineReducers } from 'redux';
import hostelReducer from '../src/Features/hostelSlice';
import bookingReducer from "../src/Features/BookingSlice"

// Combine reducers (if you have more in future)
const rootReducer = combineReducers({
  auth: authReducer,
  hostel: hostelReducer,
  booking: bookingReducer,


});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // only persist auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
