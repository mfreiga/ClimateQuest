import { Link } from "react-router-dom";
import CarbonTrackerWidget from "./CarbonTrackerWidget";
import FriendLeaderboard from "./FriendLeaderboard";
import ChallengeGrid from "./ChallengeGrid";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

function DashboardLayout() {
  const totalPoints = 2500;
  const monthlyTarget = 5000;
  const progress = (totalPoints / monthlyTarget) * 100;

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
        <div className="flex gap-8">
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-white/80 mb-6">
                Track your progress and join new challenges.
              </p>

              <Card className="p-6 bg-white mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">
                      Monthly Progress
                    </h2>
                    <p className="text-sm text-gray-500">
                      Keep up the great work!
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-semibold">
                      {totalPoints} pts
                    </span>
                  </div>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{totalPoints} points earned</span>
                  <span>{monthlyTarget} points target</span>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <CarbonTrackerWidget />
              <ChallengeGrid />
            </div>
          </div>

          <div className="w-[300px]">
            <FriendLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
