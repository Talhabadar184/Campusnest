// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitFeedback, clearFeedbackState } from "../Features/ratingSlice";

// const SelectField = ({ options, value, onChange }) => (
//   <select
//     value={value}
//     onChange={onChange}
//     className="w-full p-2 rounded border border-gray-300 bg-white outline-none"
//   >
//     {options.map((opt, idx) => (
//       <option key={idx} value={opt === "-- Please Select --" ? "" : opt}>
//         {opt}
//       </option>
//     ))}
//   </select>
// );

// const FeedbackForm = ({
//   hostelId,
//   handleSubmit,
//   feedback,
//   setFeedback,
//   rating,
//   setRating,
//   recommend,
//   setRecommend,
// }) => {
//   const dispatch = useDispatch();
//   const { loading, error, successMessage } = useSelector((state) => state.ratings);

//   // Clear feedback state and reset form on success
//   useEffect(() => {
//     if (successMessage) {
//       setRating("");
//       setRecommend("");
//       setFeedback("");
//     }

//     return () => {
//       dispatch(clearFeedbackState());
//     };
//   }, [successMessage, dispatch, setRating, setRecommend, setFeedback]);

//   return (
//     <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-6">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {error && <p className="text-red-600 font-semibold text-center">{error}</p>}
//         {successMessage && <p className="text-green-600 font-semibold text-center">{successMessage}</p>}

//         <div className="flex flex-col gap-6 sm:flex-row justify-between">
//           <div className="w-full sm:w-1/2">
//             <label className="block mb-1 font-medium">Your Rating</label>
//             <SelectField
//               options={["-- Please Select --", "1", "2", "3", "4", "5"]}
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//           </div>

//           <div className="w-full sm:w-1/2">
//             <label className="block mb-1 font-medium">Would you recommend this hostel?</label>
//             <SelectField
//               options={["-- Please Select --", "Yes", "No"]}
//               value={recommend}
//               onChange={(e) => setRecommend(e.target.value)}
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Your Feedback</label>
//           <textarea
//             placeholder="Type your feedback"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             className="w-full h-32 p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 outline-none resize-none"
//           />
//         </div>

//         <div className="flex justify-end gap-3">
//           <button
//             type="button"
//             onClick={() => {
//               setRating("");
//               setRecommend("");
//               setFeedback("");
//               dispatch(clearFeedbackState());
//             }}
//             className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition"
//             disabled={loading}
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFeedbackState } from "../Features/ratingSlice";

const SelectField = ({ id, options, value, onChange }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className="w-full p-2 rounded border border-gray-300 bg-white outline-none"
  >
    {options.map((opt, idx) => (
      <option key={idx} value={opt === "-- Please Select --" ? "" : opt}>
        {opt}
      </option>
    ))}
  </select>
);


const FeedbackForm = ({
  handleSubmit,
  feedback,
  setFeedback,
  rating,
  setRating,
  recommend,
  setRecommend,
}) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.rating || {});

  useEffect(() => {
    if (success) {
      setRating("");
      setRecommend("");
      setFeedback("");
    }

    return () => {
      dispatch(resetFeedbackState());
    };
  }, [success, dispatch, setRating, setRecommend, setFeedback]);

  return (
    <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-600 font-semibold text-center">{error}</p>}
        {success && (
          <p className="text-green-600 font-semibold text-center">
            Feedback submitted successfully!
          </p>
        )}

        <div className="flex flex-col gap-6 sm:flex-row justify-between">
          <div className="w-full sm:w-1/2">
            <label className="block mb-1 font-medium">Your Rating</label>
            <SelectField
              options={["-- Please Select --", "1", "2", "3", "4", "5"]}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block mb-1 font-medium">Would you recommend this hostel?</label>
            <SelectField
              options={["-- Please Select --", "Yes", "No"]}
              value={recommend}
              onChange={(e) => setRecommend(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Your Feedback</label>
          <textarea
            placeholder="Type your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-32 p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 outline-none resize-none"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setRating("");
              setRecommend("");
              setFeedback("");
              dispatch(resetFeedbackState());
            }}
            className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition"
            disabled={loading}
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

