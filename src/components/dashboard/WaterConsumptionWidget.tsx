import { useState } from "react";
import Navigation from "@/components/ui/navigation";
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
      <Navigation showLogin={false} />

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              Water Consumption
            </h1>
            <p className="text-white/80 mb-6">
              Monitor and optimize your household water usage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Household Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="space-y-2">
                    <Label>Number of Residents</Label>
                    <Input
                      type="number"
                      value={residents}
                      onChange={(e) => setResidents(Number(e.target.value))}
                      placeholder="Enter number of residents"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Daily Water Usage (m³)</Label>
                    <Input
                      type="number"
                      value={usage}
                      onChange={(e) => setUsage(Number(e.target.value))}
                      placeholder="Enter daily water usage"
                    />
                  </div>
                  <Button onClick={calculatePoints} className="w-full">
                    Calculate Impact
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-blue-600 mb-2">
                        {points}
                      </div>
                      <p className="text-sm text-gray-500">Points Earned</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-semibold text-blue-600 mb-1">
                          {residents}
                        </div>
                        <p className="text-sm text-gray-500">Residents</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-semibold text-blue-600 mb-1">
                          {usage} m³
                        </div>
                        <p className="text-sm text-gray-500">Daily Usage</p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p className="mb-2">
                        <strong>Water Saving Tips:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fix leaky faucets and pipes</li>
                        <li>Install water-efficient appliances</li>
                        <li>Take shorter showers</li>
                        <li>Collect rainwater for plants</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
