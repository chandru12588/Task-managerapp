import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 mt-4 justify-center">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 border rounded ${currentPage === page ? "bg-green-600 text-white" : ""}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
