"use client";
import { useState, useEffect } from "react";

const DefaultModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show the modal when the page first loads
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Your other page content here */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[500px] w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Notice</h2>
            <p className="mb-6">
              Some features on this website are still under development. I
              appreciate your patience and understanding.
            </p>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultModal;
