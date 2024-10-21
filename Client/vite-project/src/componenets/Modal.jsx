import React from 'react';

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-gray-800 rounded-lg p-6 z-10 w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded-md font-semibold"
          onClick={onClose}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Modal;
