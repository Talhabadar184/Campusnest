// import React from "react";
// import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

// // Screens
// import Signup from "./signup/Signup";
// import Signin from "./Signin/Signin";
// import ResetPassword from "./Signin/ResetPassword";
// import Register from "./signup/Register";
// import ForgotPassword from "./Forgotpassword/ForgotPassword";
// import VerifyCode from "./Forgotpassword/VerifyCode";
// import VerifyEmail from "./VerifyEmail/VerifyEmail";

// // Protected Pages
// import Home from "./Home/Home";
// import Listing from "./Listing/Listing";
// import Comparison from "./components/Comparison";
// import Details from "./Hostel Details/Details";
// import Booking from "./Booking Forms/Booking";
// import Payment from "./Booking Forms/Payment";
// import Ratings from "./Ratings Feedback/Ratings";
// import Notifications from "./components/Notifications";
// import Profile from "./Profile/Profile";
// import MyProfile from "./Profile/Myprofile";
// import Tennet from "./Dashboard/Tennet";
// import Owner from "./Dashboard/Owner";
// import Inbox from "./Inbox/Inbox";
// import NewHostel from "./Dashboard/NewHostel";

// // Route Guard
// import PrivateRoute from "./private";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <RouterRoutes>
//         {/* Default route shows Home */}
//         <Route path="/" element={<Home />} />

//         {/* Public Routes */}
//         {/* <Route path="/Signup" element={<Signup />} /> */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify-email/:token" element={<VerifyEmail />} />
//         <Route path="/Signin" element={<Signin />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />
//         <Route path="/Verifycode" element={<VerifyCode />} />
//         <Route path="/ResetPassword" element={<ResetPassword />} />

//         {/* Public Pages accessible to all users */}
//         <Route path="/Home" element={<Home />} />
//         <Route path="/NewHostel" element={<NewHostel />} />

//         {/* Protected Routes */}
//         <Route path="/Listing" element={<Listing />} />
//         <Route path="/Listing/Comparison" element={<Comparison />} />

//         <Route path="/details/:id" element={<Details />} />


//         <Route
//           path="/Booking"
//           element={
//             <PrivateRoute>
//               <Booking />
//             </PrivateRoute>
//           }
//         >
//           <Route path="Payment" element={<Payment />} />
//         </Route>

//         <Route
//           path="/Ratings"
//           element={
//             <PrivateRoute>
//               <Ratings />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Notifications"
//           element={
//             <PrivateRoute>
//               <Notifications />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Myprofile"
//           element={
//             <PrivateRoute>
//               <MyProfile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Tennet"
//           element={
//             <PrivateRoute>
//               <Tennet />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Owner"
//           element={
//             <PrivateRoute>
//               <Owner />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Inbox"
//           element={
//             <PrivateRoute>
//               <Inbox />
//             </PrivateRoute>
//           }
//         />
//       </RouterRoutes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;
// import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// // Screens
// import Signup from "./signup/Signup";
// import Signin from "./Signin/Signin";
// import ResetPassword from "./Signin/ResetPassword";
// import Register from "./signup/Register";
// import ForgotPassword from "./Forgotpassword/ForgotPassword";
// import VerifyCode from "./Forgotpassword/VerifyCode";
// import VerifyEmail from "./VerifyEmail/VerifyEmail";

// // Protected Pages
// import Home from "./Home/Home";
// import Listing from "./Listing/Listing";
// import Comparison from "./components/Comparison";
// import Details from "./Hostel Details/Details";
// import Booking from "./Booking Forms/Booking";
// import Payment from "./Booking Forms/Payment";
// import Ratings from "./Ratings Feedback/Ratings";
// import Notifications from "./components/Notifications";
// import Profile from "./Profile/Profile";
// import MyProfile from "./Profile/Myprofile";
// import Tennet from "./Dashboard/Tennet";
// import Owner from "./Dashboard/Owner";
// import Inbox from "./Inbox/Inbox";
// import NewHostel from "./Dashboard/NewHostel";

// // Route Guard
// import PrivateRoute from "./private";
// import { getUserProfile } from "./Features/authSlics"; // Adjust path accordingly

// function AppRoutes() {
//   const dispatch = useDispatch();
//   const accessToken = useSelector((state) => state.auth.accessToken);

//   useEffect(() => {
//     if (accessToken) {
//       dispatch(getUserProfile());
//     }
//   }, [accessToken, dispatch]);

//   return (
//     <BrowserRouter>
//       <RouterRoutes>
//         {/* Default route shows Home */}
//         <Route path="/" element={<Home />} />

//         {/* Public Routes */}
//         {/* <Route path="/Signup" element={<Signup />} /> */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/verify-email/:token" element={<VerifyEmail />} />
//         <Route path="/Signin" element={<Signin />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />
//         <Route path="/Verifycode" element={<VerifyCode />} />
//         <Route path="/ResetPassword" element={<ResetPassword />} />

//         {/* Public Pages accessible to all users */}
//         <Route path="/Home" element={<Home />} />
//         <Route path="/NewHostel" element={<NewHostel />} />

//         {/* Protected Routes */}
//         <Route path="/Listing" element={<Listing />} />
//         <Route path="/Listing/Comparison" element={<Comparison />} />
//         <Route path="/details/:id" element={<Details />} />

//         <Route
//           path="/Booking"
//           element={
//             <PrivateRoute>
//               <Booking />
//             </PrivateRoute>
//           }
//         >
//           <Route path="Payment" element={<Payment />} />
//         </Route>

//         <Route
//           path="/Ratings"
//           element={
//             <PrivateRoute>
//               <Ratings />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Notifications"
//           element={
//             <PrivateRoute>
//               <Notifications />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Myprofile"
//           element={
//             <PrivateRoute>
//               <MyProfile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Tennet"
//           element={
//             <PrivateRoute>
//               <Tennet />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Owner"
//           element={
//             <PrivateRoute>
//               <Owner />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/Inbox"
//           element={
//             <PrivateRoute>
//               <Inbox />
//             </PrivateRoute>
//           }
//         />
//       </RouterRoutes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;


import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Stripe imports
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Your publishable Stripe key (replace with your real key)
const stripePromise = loadStripe("pk_test_51RSzTu2HAw2xX7c7z3U4KVJv8S9kQXchrQK3Ayw7pDkgz8O1cFPmkwUoVNTua5mdpZ6ehLIuK4A78M0RDhtHacoc00czQsEU3N");

// Screens
import Signup from "./signup/Signup";
import Signin from "./Signin/Signin";
import ResetPassword from "./Signin/ResetPassword";
import Register from "./signup/Register";
import ForgotPassword from "./Forgotpassword/ForgotPassword";
import VerifyCode from "./Forgotpassword/VerifyCode";
import VerifyEmail from "./VerifyEmail/VerifyEmail";

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

import PrivateRoute from "./private";
import { getUserProfile } from "./Features/authSlics";

function AppRoutes() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userInfo = useSelector((state) => state.auth.user);
  const state = useSelector(state => state);
  console.log("Inbox entire Redux state:", state);
  

  useEffect(() => {
    if (accessToken && !userInfo ) {
      dispatch(getUserProfile());
    }
  }, [accessToken,userInfo, dispatch]);

  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <RouterRoutes>
          {/* Default route shows Home */}
          <Route path="/" element={<Home />} />

          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Verifycode" element={<VerifyCode />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />

          {/* Public Pages */}
          <Route path="/Home" element={<Home />} />
          <Route path="/NewHostel" element={<NewHostel />} />

          {/* Protected Routes */}
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Listing/Comparison" element={<Comparison />} />
          <Route path="/details/:id" element={<Details />} />

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
  path="/Ratings/:id"
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
        </RouterRoutes>
      </BrowserRouter>
    </Elements>
  );
}

export default AppRoutes;
