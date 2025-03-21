import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers dynamically
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push(1, "..."); // Show first page + dots
      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...", totalPages); // Show last page + dots
    }
    return pages;
  };

  return (
    <div className="flex justify-center m-4">
      <div className="flex justify-between max-w-3xl items-center p-4 border rounded-lg w-full">
        {/* Compare Button */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800">
          Compare
        </button>

        {/* Pagination */}
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dynamic Page Numbers */}
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

          {/* Next Button */}
          <button
            className="p-2 border rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
