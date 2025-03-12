import React from "react";
import Signup from "./signup/Signup";
import Signin from "./Signin/Signin";
import ResetPassword from "./Signin/ResetPassword";
import Register from "./signup/Register";
import ForgotPassword from "./Forgotpassword/ForgotPassword";
import ForgotPassword1 from "./Forgotpassword/ForgotPassword1";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

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
        <Route path="/verify-code" element={<ForgotPassword1 />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default AppRoutes;
