import React from "react";
import Signup from "./signup/Signup";
import Register from "./signup/Register";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* Redirect the root path to the Hero (Main Page) initially */}
        <Route path="/" element={<Navigate to="/Signup" replace />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/signup/register" element={<Register />} /> {/* Make sure this path matches */}
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default AppRoutes;
