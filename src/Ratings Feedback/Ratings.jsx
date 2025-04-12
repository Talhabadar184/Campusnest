import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/Inputfield";
import SelectField from "../components/Selectfield";
import left from "../assets/Ratings/left.png";
import right from "../assets/Ratings/right.png";

const Ratings = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [recommend, setRecommend] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { rating, recommend, feedback });
    setFeedback("");
    setRating("");
    setRecommend("");
  };

  const userReviews = [
    {
      id: 1,
      name: "Kamran Ali",
      role: "LUMS Student",
      rating: "⭐⭐⭐⭐4.5",
      review:
        "Lahore Backpackers exceeded all my expectations! The hostel is clean, comfortable, and well-maintained, offering a cozy environment perfect for travelers. The staff is incredibly friendly and helpful, always ready to provide tips on local attractions and hidden gems in Lahore. I highly recommend Lahore Backpackers to anyone looking for a memorable and budget-friendly experience in Lahore.",
      profileImg: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Ayesha Khan",
      role: "Travel Blogger",
      rating: "⭐⭐⭐⭐⭐5",
      review:
        "This was the best hostel experience I’ve had! The location is amazing, and the service is outstanding. Will definitely stay here again.",
      profileImg: "https://via.placeholder.com/50",
    },
  ];

  const totalPages = Math.ceil(userReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = userReviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl text-blue-700 mb-4 text-center sm:text-left">Ratings and Feedback</h2>

          {/* Feedback Form */}
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating & Recommendation Fields */}
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
                  <label className="block mb-1 font-medium">
                    Would you like to recommend this hostel?
                  </label>
                  <SelectField
                    options={["-- Please Select --", "Yes", "No"]}
                    value={recommend}
                    onChange={(e) => setRecommend(e.target.value)}
                  />
                </div>
              </div>

              {/* Feedback Text Field */}
              <div>
                <label className="block font-medium mb-1">Your Feedback</label>
                <textarea
                  placeholder="Type your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 outline-none resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFeedback("");
                    setRating("");
                    setRecommend("");
                  }}
                  className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* User Reviews Section */}
          <div className="mt-12 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">User Reviews</h3>
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-4 rounded-lg shadow-md mb-6"
              >
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

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-gray-600 gap-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
              >
                <img src={left} alt="Previous" className="h-5" />
                <span className="text-blue-600">Back</span>
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200"
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
