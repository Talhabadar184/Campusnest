import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Comparison from "../components/Comparison";

const Pagination = ({ 
  totalPages, 
  currentPage, 
  setCurrentPage, 
  hostels, 
  selectedHostels, 
  setSelectedHostels 
}) => {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push(1, "..."); 
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...", totalPages); 
    }
    return pages;
  };

  const uniqueAmenities = [...new Set(hostels.flatMap(hostel => hostel.amenities))];

  return (
    <div className="flex flex-col items-center m-4">
      <div className="flex justify-between max-w-3xl items-center p-4 border rounded-lg w-full">
        {/* Compare Button */}
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedHostels.length === 2
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => setIsCompareOpen(true)}
          disabled={selectedHostels.length !== 2}
        >
          Compare
        </button>
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
          </button>
          {renderPageNumbers().map((page, index) =>
            page === "..." ? (
              <MoreHorizontal key={index} size={20} />
            ) : (
              <button
                key={page}
                className={`px-3 py-1 rounded-lg ${currentPage === page ? "bg-blue-700 text-white" : "border"}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      

      {/* Comparison Modal */}
      {isCompareOpen && (
        <Comparison 
          open={isCompareOpen} 
          onClose={() => setIsCompareOpen(false)} 
          hostels={selectedHostels} 
          amenities={uniqueAmenities} 
        />
      )}
    </div>
  );
};

export default Pagination;
