import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePine, Globe2, Trophy } from "lucide-react";
import FriendLeaderboard from "./FriendLeaderboard";

interface TreePlantingWidgetProps {
  initialTreesPlanted?: number;
  initialCO2Offset?: number;
}

const TreePlantingWidget = ({
  initialTreesPlanted = 0,
  initialCO2Offset = 0,
}: TreePlantingWidgetProps) => {
  const [treesPlanted, setTreesPlanted] = useState(initialTreesPlanted);
  const [co2Offset, setCo2Offset] = useState(initialCO2Offset);

  const handleDonation = (trees: number, amount: number) => {
    setTreesPlanted((prev) => prev + trees);
    // Assuming each tree offsets about 25kg of CO2 per year
    setCo2Offset((prev) => prev + trees * 25);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              Plant Trees Challenge
            </h1>
            <p className="text-white/80 mb-6">
              Join us in making the world greener by contributing to
              reforestation efforts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-green-500" />
                    Plant Trees
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="p-8 h-auto flex flex-col items-center gap-2"
                      onClick={() => handleDonation(1, 10)}
                    >
                      <TreePine className="w-8 h-8 text-green-500" />
                      <div className="text-lg font-semibold">1 Tree</div>
                      <div className="text-sm text-gray-500">$10</div>
                    </Button>
                    <Button
                      variant="outline"
                      className="p-8 h-auto flex flex-col items-center gap-2"
                      onClick={() => handleDonation(5, 45)}
                    >
                      <div className="flex gap-1">
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                      </div>
                      <div className="text-lg font-semibold">5 Trees</div>
                      <div className="text-sm text-gray-500">$45</div>
                    </Button>
                    <Button
                      variant="outline"
                      className="p-8 h-auto flex flex-col items-center gap-2"
                      onClick={() => handleDonation(10, 80)}
                    >
                      <div className="flex gap-1">
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                      </div>
                      <div className="text-lg font-semibold">10 Trees</div>
                      <div className="text-sm text-gray-500">$80</div>
                    </Button>
                    <Button
                      variant="outline"
                      className="p-8 h-auto flex flex-col items-center gap-2"
                      onClick={() => handleDonation(20, 150)}
                    >
                      <div className="flex gap-1 flex-wrap justify-center max-w-[120px]">
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                        <TreePine className="w-8 h-8 text-green-500" />
                      </div>
                      <div className="text-lg font-semibold">20 Trees</div>
                      <div className="text-sm text-gray-500">$150</div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-blue-500" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-green-600 mb-2">
                        {treesPlanted}
                      </div>
                      <p className="text-sm text-gray-500">Trees Planted</p>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-semibold text-green-600 mb-1">
                        {co2Offset} kg
                      </div>
                      <p className="text-sm text-gray-500">
                        CO₂ Offset per Year
                      </p>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p className="mb-2">
                        <strong>Why Plant Trees?</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Combat climate change</li>
                        <li>Restore biodiversity</li>
                        <li>Support local communities</li>
                        <li>Improve air quality</li>
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

export default TreePlantingWidget;
