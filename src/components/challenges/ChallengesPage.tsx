import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Leaf, Droplet, TreePine } from "lucide-react";
import ChallengeGrid from "../dashboard/ChallengeGrid";

const ChallengesPage = () => {
  const navigate = useNavigate();

  const challenges = [
    {
      title: "Carbon Footprint",
      description: "Track and reduce your CO2 emissions",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      path: "/challenges/carbon",
      color: "bg-green-100",
    },
    {
      title: "Water Consumption",
      description: "Monitor and optimize your water usage",
      icon: <Droplet className="w-8 h-8 text-blue-500" />,
      path: "/challenges/water",
      color: "bg-blue-100",
    },
    {
      title: "Plant Trees",
      description: "Contribute to global reforestation efforts",
      icon: <TreePine className="w-8 h-8 text-teal-500" />,
      path: "/challenges/trees",
      color: "bg-teal-100",
    },
  ];

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
          <Link to="/community" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Challenges</h1>
            <p className="text-white/80 mb-8">
              Choose a challenge category to start making an impact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <Card
                  key={challenge.title}
                  className="p-6 cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => navigate(challenge.path)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full ${challenge.color} mb-4`}>
                      {challenge.icon}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      {challenge.title}
                    </h2>
                    <p className="text-gray-500">{challenge.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Active Monthly Challenges
            </h2>
            <p className="text-white/80 mb-6">
              Join these challenges to earn extra points and make a bigger
              impact
            </p>
            <ChallengeGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
