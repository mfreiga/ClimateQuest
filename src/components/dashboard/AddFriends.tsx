import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Plus, Trophy } from "lucide-react";

const suggestedFriends = [
  {
    id: "1",
    name: "Sarah Woods",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    points: 2100,
  },
  {
    id: "2",
    name: "Mike Forest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    points: 1900,
  },
  {
    id: "3",
    name: "Lisa Earth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    points: 1800,
  },
];

const AddFriends = () => {
  const [email, setEmail] = useState("");

  const handleInvite = () => {
    console.log("Invite sent to:", email);
    setEmail("");
  };

  return (
    <Card className="w-[300px] bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Users className="w-5 h-5" />
          Add Friends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter friend's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="w-full gap-2"
                onClick={handleInvite}
                variant="outline"
              >
                <Plus className="w-4 h-4" />
                Send Invite
              </Button>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Suggested Friends
              </h3>
              <div className="space-y-3">
                {suggestedFriends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{friend.name}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Trophy className="w-3 h-3" />
                          <span>{friend.points} points</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Earn 500 points for each friend that joins!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddFriends;
