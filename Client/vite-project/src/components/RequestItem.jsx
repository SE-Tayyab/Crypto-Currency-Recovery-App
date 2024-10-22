import React from "react";
import { Pencil, Trash2 } from "lucide-react";

function RequestItem({ request, onDeleteRequest }) {
  const handleEditRequest = () => {
    console.log("Edit request:", request.id);
  };

  const getStatusColor = (status) => {
    const statusMap = {
      pending: "bg-yellow-500",
      approved: "bg-green-500",
      rejected: "bg-red-500",
      inProgress: "bg-blue-500",
    };
    return statusMap[status.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div className="w-full mb-6 overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
        {/* Personal Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Personal Information
          </h3>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Name:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.firstName} {request.lastName}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Email:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.email}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Phone:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.phone}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Country:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.country}
              </span>
            </div>
          </div>
        </div>

        {/* Case Details Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Case Details
          </h3>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Cryptocurrency:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.cryptoName}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Amount Lost:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {request.amount}
              </span>
            </div>
            {/* <div className="flex items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 w-32">
                Status:
              </span>
              <span
                className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(
                  request.status
                )}`}
              >
                {request.status}
              </span>
            </div> */}
          </div>
        </div>

        {/* Case Report Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Case Report
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {request.caseReport}
            </p>
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end gap-2 p-4 bg-gray-50 dark:bg-gray-700/50 border-t dark:border-gray-700">
        {/* <button
          onClick={handleEditRequest}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-150 ease-in-out"
        >
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </button> */}
        <button
          onClick={() => onDeleteRequest(request._id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors duration-150 ease-in-out"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default RequestItem;
