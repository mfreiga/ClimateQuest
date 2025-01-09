import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TreePine, Users, Trophy, Leaf } from "lucide-react";

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: "10K+",
      label: "Active Users",
    },
    {
      icon: <TreePine className="w-8 h-8 text-green-500" />,
      value: "50K+",
      label: "Trees Planted",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      value: "100K+",
      label: "Challenges Completed",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      value: "500K+",
      label: "CO₂ Reduced (kg)",
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Making Climate Action Fun & Rewarding
          </h1>
          <p className="text-xl text-white/80 mb-12">
            ClimateQuest is a gamified platform that helps individuals and
            communities track their environmental impact while making
            sustainable choices fun and engaging.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-white/80">
                We believe that making a positive environmental impact should be
                accessible, measurable, and enjoyable. By combining gamification
                with real-world actions, we empower individuals to make
                sustainable choices while building a community of
                environmentally conscious citizens.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-4">
                How It Works
              </h2>
              <ul className="text-white/80 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold">1.</span> Track your daily
                  activities and their environmental impact
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">2.</span> Join challenges and
                  compete with friends
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">3.</span> Earn rewards and
                  achievements
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">4.</span> Connect with like-minded
                  individuals
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-10 py-6"
              onClick={() => navigate("/dashboard")}
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
