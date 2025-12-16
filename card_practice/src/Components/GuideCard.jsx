import { useState } from "react";

function GuideCard({ guide }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="max-w-xs bg-white rounded-lg shadow-lg hover:shadow-blue-400 transition">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Guide"
        />

        <div className="px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {guide.name.firstname} {guide.name.lastname}
          </h3>
          <p className="text-gray-600 text-sm">Tour Guide</p>
        </div>

        <div className="px-4 py-3 space-x-1">
          <span className="badge">1 Day</span>
          <span className="badge">3 Days</span>
          <span className="badge">1 Week</span>
        </div>

        <div className="px-4 py-3">
          <button
            onClick={() => setShowPopup(true)}
            className="text-blue-500 text-sm hover:underline"
          >
            Book Guide
          </button>
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-lg font-semibold mb-2">Booking Successful 🎉</h2>
            <p className="text-gray-600 mb-4">
              You have booked {guide.name.firstname}.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GuideCard;
