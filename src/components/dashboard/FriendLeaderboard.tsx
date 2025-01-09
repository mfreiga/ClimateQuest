import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, Leaf, TreePine } from "lucide-react";

interface FriendData {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
  treesPlanted: number;
}

interface FriendLeaderboardProps {
  friends?: FriendData[];
  onPlantTree?: () => void;
}

const defaultFriends: FriendData[] = [
  {
    id: "1",
    name: "Emma Green",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    score: 2500,
    rank: 1,
    treesPlanted: 15,
  },
  {
    id: "2",
    name: "James River",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    score: 2300,
    rank: 2,
    treesPlanted: 12,
  },
  {
    id: "3",
    name: "Sarah Woods",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    score: 2100,
    rank: 3,
    treesPlanted: 10,
  },
  {
    id: "4",
    name: "Mike Forest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    score: 1900,
    rank: 4,
    treesPlanted: 8,
  },
  {
    id: "5",
    name: "Lisa Earth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    score: 1800,
    rank: 5,
    treesPlanted: 7,
  },
];

const FriendLeaderboard = ({
  friends = defaultFriends,
  onPlantTree = () => console.log("Plant tree clicked"),
}: FriendLeaderboardProps) => {
  return (
    <Card className="w-[300px] bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">
            Friend Leaderboard
          </CardTitle>
          <Trophy className="w-6 h-6 text-yellow-500" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 text-sm font-semibold text-gray-500">
                    #{friend.rank}
                  </span>
                  <Avatar>
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{friend.name}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Leaf className="w-3 h-3" />
                      <span>{friend.score} points</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <TreePine className="w-3 h-3" />
                  <span>{friend.treesPlanted}</span>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full gap-2" onClick={onPlantTree}>
            <TreePine className="w-4 h-4" />
            Plant a Tree
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendLeaderboard;
