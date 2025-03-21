import React from "react";
import Signup from "./signup/Signup";
import Signin from "./Signin/Signin";
import ResetPassword from "./Signin/ResetPassword";
import Register from "./signup/Register";
import ForgotPassword from "./Forgotpassword/ForgotPassword";
import VerifyCode from "./Forgotpassword/VerifyCode";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Listing from "./Listing/Listing";

function AppRoutes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* Redirect the root path to the Hero (Main Page) initially */}
        <Route path="/" element={<Navigate to="/Signin" replace />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifycode" element={<VerifyCode />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default AppRoutes;
