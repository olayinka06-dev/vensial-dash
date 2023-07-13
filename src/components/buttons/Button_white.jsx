"use client";

import { useState } from "react";

const Button_white = ({ buttonText, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (typeof onClick === "function") {
        onClick();
      }
    }, 2000);
  };

  return (
    <button
      className={`relative flex items-center justify-center py-3 px-10 cursor-pointer font-bold rounded-2xl text-black text-opacity-50 text-sm border border-black border-opacity-10 bg-light-color ${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg
            className="absolute animate-spin w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="#000"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
            ></path>
          </svg>
          <span className="ml-2">{buttonText}</span>
        </>
      ) : (
        buttonText
      )}
    </button>
  );
};

export default Button_white;
