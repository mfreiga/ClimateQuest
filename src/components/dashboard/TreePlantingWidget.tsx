import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
              Plant Trees Challenge
            </h1>
            <p className="text-white/80 mb-6">
              Join us in making the world greener by contributing to
              reforestation efforts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white p-8 flex flex-col items-center hover:shadow-lg transition-all">
                <div className="w-32 h-32 mb-6 bg-teal-50 rounded-full p-6">
                  <img
                    src="/tree-icon.svg"
                    alt="Single Tree"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">1 Tree</h3>
                <p className="text-gray-500 mb-4 text-center">
                  Plant a single tree and start your journey
                </p>
                <Button
                  onClick={() => handleDonation(1, 5)}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Donate $5
                </Button>
              </Card>

              <Card className="bg-white p-8 flex flex-col items-center hover:shadow-lg transition-all border-2 border-teal-500">
                <div className="w-32 h-32 mb-6 bg-teal-50 rounded-full p-6">
                  <img
                    src="/tree-icon.svg"
                    alt="Five Trees"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">5 Trees</h3>
                <p className="text-gray-500 mb-4 text-center">
                  Most popular choice for making an impact
                </p>
                <Button
                  onClick={() => handleDonation(5, 20)}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Donate $20
                </Button>
              </Card>

              <Card className="bg-white p-8 flex flex-col items-center hover:shadow-lg transition-all">
                <div className="w-32 h-32 mb-6 bg-teal-50 rounded-full p-6">
                  <img
                    src="/tree-icon.svg"
                    alt="Ten Trees"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">10 Trees</h3>
                <p className="text-gray-500 mb-4 text-center">
                  Make the biggest impact on our planet
                </p>
                <Button
                  onClick={() => handleDonation(10, 40)}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Donate $40
                </Button>
              </Card>
            </div>

            <Card className="bg-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Your Impact</h3>
                  <p className="text-gray-500">
                    Track your contribution to reforestation
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-teal-600 mb-1">
                    {treesPlanted.toString().padStart(3, "0")} Trees
                  </p>
                  <p className="text-sm text-gray-500">
                    {co2Offset.toString().padStart(3, "0")} kg CO₂ offset per
                    year
                  </p>
                </div>
              </div>
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

export default TreePlantingWidget;
