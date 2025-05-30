import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email...");
  const [error, setError] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        console.log("Sending verification request with token:", token);
        const response = await axios.get(`http://localhost:8000/verify-email/${token}`);
        console.log("Verification response:", response.data);

        setMessage(response.data.message);
        setError(false);

        // Redirect to signin after 3 seconds
        setTimeout(() => {
          navigate("/signin");  // Make sure this matches your frontend route exactly
        }, 3000);
      } catch (err) {
        console.error("Verification failed:", err.response || err.message);
        setError(true);
        setMessage(
          err.response?.data?.message || "Email verification failed. Please try again."
        );
      }
    };

    if (token) {
      verifyToken();
    } else {
      setError(true);
      setMessage("Invalid verification link.");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="p-6 max-w-md w-full text-center bg-white rounded-xl shadow-md">
        <h1 className={`text-2xl font-semibold mb-4 ${error ? "text-red-600" : "text-green-600"}`}>
          {error ? "Verification Failed" : "Email Verified"}
        </h1>
        <p className="text-gray-700">{message}</p>
        {!error && <p className="mt-2 text-sm text-gray-500">Redirecting to login...</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
