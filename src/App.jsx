import React from "react";
import Signup from "./signup/Signup";
import Signin from "./Signin/Signin";
import ResetPassword from "./Signin/ResetPassword";
import Register from "./signup/Register";
import ForgotPassword from "./Forgotpassword/ForgotPassword";
import VerifyCode from "./Forgotpassword/VerifyCode";
import Home from "./Home/Home";
import {
  BrowserRouter,
  Route,
  Routes as RouterRoutes,
  Navigate,
} from "react-router-dom";
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

function AppRoutes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Navigate to="/Signin" replace />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifycode" element={<VerifyCode />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Listing" element={<Listing />}>
          <Route path="Comparison" element={<Comparison />} />
        </Route>
        <Route path="/Details" element={<Details />} />
        <Route path="/Details" element={<Details />}>
          <Route path="Booking" element={<Booking />} />
        </Route>
        <Route path="/Booking" element={<Booking />}>
          <Route path="Payment" element={<Payment />} />
        </Route>
        <Route path="/Ratings" element={<Ratings />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Myprofile" element={<MyProfile />} />
        <Route path="/Tennet" element={<Tennet />} />
        <Route path="/Owner" element={<Owner />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/NewHostel" element={<NewHostel />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default AppRoutes;
