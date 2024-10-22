import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestList from "../../components/RequestList";
import LoadingSpinner from "../../components/LoadingSpinner";

function Requests() {
  const [requests, setRequests] = useState([]); // State to store requests
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(""); // State to manage errors

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/api/v1/crypto-recovery/cases"
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/crypto-recovery/cases`
        );
        setRequests(response.data.data);
      } catch (err) {
        // setError("No requests found.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleDeleteRequest = async (id) => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/crypto-recovery/delete`,
        {
          id, // Sending ID as an object
        }
      );

      // Update the state to remove the deleted request
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
    } catch (err) {
      setError("We couldn't delete the request. Please try again.");
    }
  };

  const handleCloseError = () => {
    setError("");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Requests</h1>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <p>{error}</p>
            <button
              onClick={handleCloseError}
              className="text-red-500 hover:text-red-800 transition duration-200"
            >
              &times; {/* Close button styled with an "X" symbol */}
            </button>
          </div>
        </div>
      )}
      <RequestList requests={requests} onDeleteRequest={handleDeleteRequest} />
    </div>
  );
}

export default Requests;
