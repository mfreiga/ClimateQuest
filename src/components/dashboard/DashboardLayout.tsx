import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CarbonTrackerWidget from "./CarbonTrackerWidget";
import WaterConsumptionWidget from "./WaterConsumptionWidget";
import ChallengeGrid from "./ChallengeGrid";
import FriendLeaderboard from "./FriendLeaderboard";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <nav className="container mx-auto px-4 py-6 flex items-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <CarbonTrackerWidget />
            <WaterConsumptionWidget />
          </div>
          <div className="lg:col-span-5">
            <ChallengeGrid />
          </div>
          <div className="lg:col-span-3">
            <FriendLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
