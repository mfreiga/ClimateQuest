import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ChallengesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <nav className="container mx-auto px-4 py-6 flex items-center">
        <button className="text-white mr-4" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          CLIMATEQUEST
        </Link>
        <div className="flex-1 flex justify-end items-center gap-8">
          <Link to="/challenges" className="text-white hover:text-gray-300">
            Challenges
          </Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/community" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L10 17L5 12"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Leaderboards</h2>
          <div className="ml-auto flex items-center gap-2">
            <div className="bg-white rounded-full px-4 py-1 text-lg font-bold">
              9999
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#FFD700" />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fill="#000"
                  fontSize="12"
                  fontWeight="bold"
                >
                  1
                </text>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mb-16">
          Add your friends, reduce together, Impact forever!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            className="p-8 flex flex-col items-center justify-center bg-white/90 backdrop-blur hover:bg-white transition-colors cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="w-24 h-24 mb-4">
              <img
                src="/footprint-icon.svg"
                alt="Carbon Footprint"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              My Carbon - Footprint
            </h3>
          </Card>

          <Card
            className="p-8 flex flex-col items-center justify-center bg-white/90 backdrop-blur hover:bg-white transition-colors cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="w-24 h-24 mb-4">
              <img
                src="/water-icon.svg"
                alt="Water Consumption"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Water Consumption
            </h3>
          </Card>

          <Card
            className="p-8 flex flex-col items-center justify-center bg-white/90 backdrop-blur hover:bg-white transition-colors cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="w-24 h-24 mb-4">
              <img
                src="/tree-icon.svg"
                alt="Planting Trees"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Planting Trees
            </h3>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
