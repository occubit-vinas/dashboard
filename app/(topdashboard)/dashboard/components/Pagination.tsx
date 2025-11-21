"use client";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage = 10,
  currentPage,
  onPageChange,
  maxVisiblePages = 3,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // compute visible page block (groups of maxVisiblePages)
  const startPage =
    Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const pageNumbers: number[] = [];
  for (let i = startPage; i < startPage + maxVisiblePages && i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between ">
      <p className="text-sm text-gray-600">
        {startItem}–{endItem} of {totalItems}
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1 || totalItems === 0}
          className="px-2 py-1 text-gray-500 disabled:opacity-40 text-2xl"
          aria-label="Previous page"
        >
          <AiOutlineLeft />
        </button>

        {pageNumbers.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={currentPage === p ? "page" : undefined}
            className={`px-3 py-1 rounded-full transition ${
              currentPage === p
                ? "bg-purple-200 text-third rounded-full py-2"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || totalItems === 0}
          className=" py-1 text-gray-500 disabled:opacity-40 text-2xl"
          aria-label="Next page"
        >
         <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;