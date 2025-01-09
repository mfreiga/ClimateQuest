import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, TreePine, Trophy } from "lucide-react";

const CommunityPage = () => {
  const navigate = useNavigate();

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
      <nav className="container mx-auto px-4 py-6 flex items-center">
        <button className="text-white mr-4" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
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
          <Link to="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/community" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
        </div>
      </nav>

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
