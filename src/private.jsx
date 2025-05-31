// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);

  // Check if user is authenticated
  return accessToken ? children : <Navigate to="/Signin" replace />;
};

export default PrivateRoute;
