import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Card } from "@/components/ui/card";

interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  participants: number;
  daysLeft: number;
  isJoined: boolean;
}

interface ChallengeGridProps {
  challenges?: Challenge[];
}

const ChallengeGrid = ({
  challenges = [
    {
      id: "1",
      title: "Zero Waste Week",
      description:
        "Minimize your waste production through conscious consumption and recycling",
      progress: 65,
      participants: 234,
      daysLeft: 5,
      isJoined: true,
    },
    {
      id: "2",
      title: "Green Transport",
      description: "Use eco-friendly transportation options for a week",
      progress: 30,
      participants: 156,
      daysLeft: 12,
      isJoined: false,
    },
    {
      id: "3",
      title: "Energy Saver",
      description: "Reduce your household energy consumption by 25%",
      progress: 45,
      participants: 189,
      daysLeft: 8,
      isJoined: false,
    },
    {
      id: "4",
      title: "Local Food Hero",
      description: "Source your food from local producers for two weeks",
      progress: 20,
      participants: 92,
      daysLeft: 14,
      isJoined: false,
    },
  ],
}: ChallengeGridProps) => {
  return (
    <Card className="w-full max-w-[800px] bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Active Challenges</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            4 Active
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            progress={challenge.progress}
            participants={challenge.participants}
            daysLeft={challenge.daysLeft}
            isJoined={challenge.isJoined}
            onJoin={() => console.log(`Join/View challenge ${challenge.id}`)}
          />
        ))}
      </div>
    </Card>
  );
};

export default ChallengeGrid;
