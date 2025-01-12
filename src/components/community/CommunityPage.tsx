import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, TreePine, Trophy } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const CommunityPage = () => {
  const communities = [
    {
      id: 1,
      name: "Zero Waste Warriors",
      members: 1234,
      treesPlanted: 567,
      achievements: 89,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=zero-waste",
    },
    {
      id: 2,
      name: "Eco Innovators",
      members: 987,
      treesPlanted: 432,
      achievements: 67,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=eco",
    },
    {
      id: 3,
      name: "Green Transport Club",
      members: 765,
      treesPlanted: 321,
      achievements: 45,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=transport",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-16">
          Join Climate Action Communities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communities.map((community) => (
            <Card
              key={community.id}
              className="p-6 bg-white/90 backdrop-blur hover:bg-white transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={community.image} />
                  <AvatarFallback>{community.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{community.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{community.members} members</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TreePine className="w-5 h-5" />
                    <span className="font-semibold">
                      {community.treesPlanted}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Trees Planted</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-yellow-600">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">
                      {community.achievements}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Achievements</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-blue-600">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">{community.members}</span>
                  </div>
                  <p className="text-xs text-gray-500">Members</p>
                </div>
              </div>

              <Button className="w-full">Join Community</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
