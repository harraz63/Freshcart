/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/"); // Navigate to the home page or shop page
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 mt-5">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-emerald-600 mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your order has been placed successfully.
        </p>
        <div className="mb-8">
          <svg
            className="w-20 h-20 text-emerald-600 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <button
          onClick={handleContinueShopping}
          className="bg-emerald-600 text-white font-medium rounded-lg px-5 py-3 text-sm hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
