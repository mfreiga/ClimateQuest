import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Timer, Users } from "lucide-react";

interface ChallengeCardProps {
  title?: string;
  description?: string;
  progress?: number;
  participants?: number;
  daysLeft?: number;
  isJoined?: boolean;
  onJoin?: () => void;
}

const ChallengeCard = ({
  title = "Reduce Carbon Footprint",
  description = "Decrease your daily carbon emissions by 20% through sustainable choices",
  progress = 45,
  participants = 128,
  daysLeft = 7,
  isJoined = false,
  onJoin = () => console.log("Join challenge clicked"),
}: ChallengeCardProps) => {
  return (
    <Card className="w-full bg-white hover:shadow-lg transition-shadow border-2 hover:border-green-500">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold truncate">
            {title}
          </CardTitle>
          <Trophy
            className={`w-5 h-5 ${isJoined ? "text-green-500" : "text-gray-300"}`}
          />
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="space-y-2">
          <Progress
            value={progress}
            className="h-2"
            indicatorClassName={isJoined ? "bg-green-500" : undefined}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{progress}% Complete</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{participants}</span>
            </div>
            <div className="flex items-center gap-1">
              <Timer className="w-4 h-4" />
              <span>{daysLeft}d left</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant={isJoined ? "outline" : "default"}
          className={`w-full ${isJoined ? "border-green-500 text-green-600 hover:bg-green-50" : "bg-green-600 hover:bg-green-700"}`}
          onClick={onJoin}
        >
          {isJoined ? "View Progress" : "Join Challenge"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
