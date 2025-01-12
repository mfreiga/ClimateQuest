import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Droplet, Users, Trophy } from "lucide-react";
import FriendLeaderboard from "./FriendLeaderboard";

interface WaterConsumptionWidgetProps {
  initialResidents?: number;
  initialUsage?: number;
  initialPoints?: number;
}

const WaterConsumptionWidget = ({
  initialResidents = 0,
  initialUsage = 0,
  initialPoints = 0,
}: WaterConsumptionWidgetProps) => {
  const [residents, setResidents] = useState(initialResidents);
  const [usage, setUsage] = useState(initialUsage);
  const [points, setPoints] = useState(initialPoints);

  const calculatePoints = () => {
    const avgUsagePerPerson = 4;
    const expectedUsage = residents * avgUsagePerPerson;

    let calculatedPoints = 0;

    if (usage < expectedUsage * 0.7) {
      calculatedPoints = 100;
    } else if (usage < expectedUsage * 0.8) {
      calculatedPoints = 75;
    } else if (usage < expectedUsage * 0.9) {
      calculatedPoints = 50;
    } else if (usage < expectedUsage) {
      calculatedPoints = 25;
    } else {
      calculatedPoints = -25;
    }

    setPoints(calculatedPoints);
  };

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
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              Water Consumption
            </h1>
            <p className="text-white/80 mb-6">
              Monitor and optimize your household water usage.
            </p>

            <Card className="w-full bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  Water Usage Tracker
                  <div className="flex items-center gap-2">
                    <Trophy
                      className={`w-5 h-5 ${points > 0 ? "text-green-500" : "text-red-500"}`}
                    />
                    <span
                      className={`text-sm ${points > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {points} points
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h3 className="font-semibold">Household Details</h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-4">
                    Enter your household information to calculate water
                    conservation points
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Number of Residents</Label>
                      <Input
                        type="number"
                        placeholder="Enter number of residents"
                        value={residents || ""}
                        onChange={(e) =>
                          setResidents(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Water Usage (m³)</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="Enter monthly usage"
                          value={usage || ""}
                          onChange={(e) =>
                            setUsage(parseInt(e.target.value) || 0)
                          }
                        />
                        <Droplet className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={calculatePoints}
                >
                  Calculate Conservation Points
                </Button>

                {points !== 0 && (
                  <div
                    className={`p-4 rounded-lg ${points > 0 ? "bg-green-50" : "bg-red-50"}`}
                  >
                    <p
                      className={`text-sm ${points > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {points > 0
                        ? `Great job! You've earned ${points} points for water conservation!`
                        : `You've lost ${Math.abs(points)} points. Try to reduce your water usage.`}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="w-[300px]">
            <FriendLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionWidget;
