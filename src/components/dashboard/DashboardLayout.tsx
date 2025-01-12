import Navigation from "@/components/ui/navigation";
import CarbonTrackerWidget from "./CarbonTrackerWidget";
import AddFriends from "./AddFriends";
import ChallengeGrid from "./ChallengeGrid";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Trophy, Lightbulb, Car, Recycle, TreePine } from "lucide-react";

function DashboardLayout() {
  const totalPoints = 2500;
  const monthlyTarget = 5000;
  const progress = (totalPoints / monthlyTarget) * 100;

  const recommendations = [
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      title: "Switch to LED Bulbs",
      impact: "Save 75% on lighting energy",
    },
    {
      icon: <Car className="w-5 h-5 text-blue-500" />,
      title: "Use Public Transport",
      impact: "Reduce emissions by 20%",
    },
    {
      icon: <Recycle className="w-5 h-5 text-green-500" />,
      title: "Increase Recycling",
      impact: "Cut waste emissions by 30%",
    },
    {
      icon: <TreePine className="w-5 h-5 text-emerald-500" />,
      title: "Plant Trees",
      impact: "Offset 25kg CO₂ per tree",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-white/80 mb-6">
                Track your progress and join new challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-white">
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

                <Card className="p-6 bg-white">
                  <h2 className="text-xl font-semibold mb-4">
                    Recommendations
                  </h2>
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50"
                      >
                        <div className="mt-0.5">{rec.icon}</div>
                        <div>
                          <h3 className="font-medium">{rec.title}</h3>
                          <p className="text-sm text-gray-500">{rec.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <ChallengeGrid />
              <CarbonTrackerWidget />
            </div>
          </div>

          <div className="w-[300px]">
            <AddFriends />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
