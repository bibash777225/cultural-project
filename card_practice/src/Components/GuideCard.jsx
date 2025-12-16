import { Link } from "react-router-dom";

function GuideCard({ guide }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg hover:shadow-blue-400 transition">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={`https://i.pravatar.cc/300?img=${guide.id}`}
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
        <button className="text-blue-500 text-sm hover:underline">
          <Link to="/"> Book Guide</Link>
        </button>
      </div>
    </div>
  );
}

export default GuideCard;
