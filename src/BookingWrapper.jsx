// // BookingWrapper.jsx
// import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import Booking from "../src/Booking Forms/Booking";

// // Your Stripe publishable key
// const stripePromise = loadStripe("pk_test_51RSzTu2HAw2xX7c7z3U4KVJv8S9kQXchrQK3Ayw7pDkgz8O1cFPmkwUoVNTua5mdpZ6ehLIuK4A78M0RDhtHacoc00czQsEU3N");

// const BookingWrapper = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <Booking />
//     </Elements>
//   );
// };

// export default BookingWrapper;
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Booking from "../src/Booking Forms/Booking";

const stripePromise = loadStripe("pk_test_51RSzTu2HAw2xX7c7z3U4KVJv8S9kQXchrQK3Ayw7pDkgz8O1cFPmkwUoVNTua5mdpZ6ehLIuK4A78M0RDhtHacoc00czQsEU3N"); // Replace with your key

function BookingWrapper(props) {
  return (
    <Elements stripe={stripePromise}>
      <Booking {...props} />
    </Elements>
  );
}

export default BookingWrapper;
