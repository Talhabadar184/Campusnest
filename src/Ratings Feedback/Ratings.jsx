import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SelectField from "../components/Selectfield";
import left from "../assets/Ratings/left.png";
import right from "../assets/Ratings/right.png";
import FeedbackForm from "../Ratings Feedback/feedback";

import { submitFeedback, addFeedback } from "../Features/ratings";

const Ratings = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [recommend, setRecommend] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1;

  const dispatch = useDispatch();

  const feedbackList = useSelector((state) => state.ratings.entries);
  const { userInfo } = useSelector((state) => state.auth);
  const { selectedHostel } = useSelector((state) => state.hostel);

  const hostelId = selectedHostel?._id; // ✅ from store
  const token = userInfo?.token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("You must be logged in to submit feedback.");
      return;
    }

    if (!hostelId) {
      alert("Hostel ID is missing.");
      return;
    }

    if (!rating || !recommend || !feedback.trim()) {
      alert("Please fill in all feedback fields.");
      return;
    }

    try {
      await dispatch(
        submitFeedback({
          hostelId,
          ratings: Number(rating),
          recommended: recommend === "Yes",
          comment: feedback,
          token,
        })
      ).unwrap();

      dispatch(
        addFeedback({
          id: Date.now(),
          name: userInfo?.name || "Anonymous",
          role: "Guest",
          rating: `${"⭐".repeat(rating)}${rating}`,
          review: feedback,
          profileImg: "https://via.placeholder.com/50",
        })
      );

      setFeedback("");
      setRating("");
      setRecommend("");
    } catch (err) {
      console.error("Feedback error:", err);
    }
  };

  const userReviews = [
    {
      id: 1,
      name: "Kamran Ali",
      role: "LUMS Student",
      rating: "⭐⭐⭐⭐4.5",
      review:
        "Lahore Backpackers exceeded all my expectations! The hostel is clean, comfortable, and well-maintained...",
      profileImg: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Ayesha Khan",
      role: "Travel Blogger",
      rating: "⭐⭐⭐⭐⭐5",
      review:
        "This was the best hostel experience I’ve had! The location is amazing, and the service is outstanding...",
      profileImg: "https://via.placeholder.com/50",
    },
    ...feedbackList,
  ];

  const totalPages = Math.ceil(userReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = userReviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl text-blue-700 mb-4 text-center sm:text-left">
            Ratings and Feedback
          </h2>

          <FeedbackForm
            hostelId={hostelId}
            handleSubmit={handleSubmit}
            feedback={feedback}
            setFeedback={setFeedback}
            rating={rating}
            setRating={setRating}
            recommend={recommend}
            setRecommend={setRecommend}
          />

          <div className="mt-12 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">User Reviews</h3>
            {currentReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={review.profileImg}
                    alt="Profile"
                    className="w-12 h-12 border border-black rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                    <p className="text-sm">{review.rating} / 5</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{review.review}</p>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-gray-600 gap-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
              >
                <img src={left} alt="Previous" className="h-5" />
                <span className="text-blue-600">Back</span>
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
              >
                <span className="text-blue-600">Next</span>
                <img src={right} alt="Next" className="h-5" />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ratings;
