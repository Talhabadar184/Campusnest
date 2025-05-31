import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Screens
import Signup from "./signup/Signup";
import Signin from "./Signin/Signin";
import ResetPassword from "./Signin/ResetPassword";
import Register from "./signup/Register";
import ForgotPassword from "./Forgotpassword/ForgotPassword";
import VerifyCode from "./Forgotpassword/VerifyCode";
import VerifyEmail from "./VerifyEmail/VerifyEmail";

// Protected Pages
import Home from "./Home/Home";
import Listing from "./Listing/Listing";
import Comparison from "./components/Comparison";
import Details from "./Hostel Details/Details";
import Booking from "./Booking Forms/Booking";
import Payment from "./Booking Forms/Payment";
import Ratings from "./Ratings Feedback/Ratings";
import Notifications from "./components/Notifications";
import Profile from "./Profile/Profile";
import MyProfile from "./Profile/Myprofile";
import Tennet from "./Dashboard/Tennet";
import Owner from "./Dashboard/Owner";
import Inbox from "./Inbox/Inbox";
import NewHostel from "./Dashboard/NewHostel";

// Route Guard
import PrivateRoute from "./private";

function AppRoutes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/Signin" replace />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifycode" element={<VerifyCode />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/Listing"
          element={
            <PrivateRoute>
              <Listing />
            </PrivateRoute>
          }
        >
          <Route path="Comparison" element={<Comparison />} />
        </Route>

        <Route
          path="/Details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
        <Route
          path="/Booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        >
          <Route path="Payment" element={<Payment />} />
        </Route>

        <Route
          path="/Ratings"
          element={
            <PrivateRoute>
              <Ratings />
            </PrivateRoute>
          }
        />
        <Route
          path="/Notifications"
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/Myprofile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/Tennet"
          element={
            <PrivateRoute>
              <Tennet />
            </PrivateRoute>
          }
        />
        <Route
          path="/Owner"
          element={
            <PrivateRoute>
              <Owner />
            </PrivateRoute>
          }
        />
        <Route
          path="/Inbox"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
        <Route
          path="/NewHostel"
          element={
            <PrivateRoute>
              <NewHostel />
            </PrivateRoute>
          }
        />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default AppRoutes;
