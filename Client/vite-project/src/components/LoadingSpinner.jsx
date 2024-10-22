import React from "react";

// LoadingSpinner component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <style>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.2);
          border-left-color: #f0c040; /* Adjust this color for the spinner */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;
