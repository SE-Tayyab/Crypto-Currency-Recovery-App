import React from "react";
import {
  Trash2,
  User,
  Briefcase,
  FileText,
  Mail,
  Phone,
  Globe,
  Bitcoin,
  DollarSign,
  Flag,
} from "lucide-react";

function RequestItem({ request, onDeleteRequest }) {
  const handleDelete = (id) => {
    // Show notification when an item is deleted
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this request?"
    );

    if (confirmDelete) {
      alert(
        `Request by ${request.firstName} ${request.lastName} has been deleted.`
      );
      onDeleteRequest(id);
    }
  };

  return (
    <div className="w-full mb-6 overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header with name and delete action */}
      <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {request.firstName} {request.lastName}
        </h2>
        <button
          onClick={() => handleDelete(request._id)}
          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors duration-150"
          aria-label="Delete request"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Content sections in cards */}
      <div className="p-4 space-y-4">
        {/* Personal Information Card */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Personal Information
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.country}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Country Code
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.countryCode}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Details Card */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Case Details
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Bitcoin className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Cryptocurrency
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.cryptoName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Amount Lost
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {request.amount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Report Card */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Case Report
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
              {request.caseReport}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestItem;
