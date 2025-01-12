import { Button } from "@/components/ui/button";
import {
  Leaf,
  TreePine,
  Droplet,
  Globe2,
  Cloud,
  Sun,
  Wind,
} from "lucide-react";
import Navigation from "./ui/navigation";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showBack={false} />

      <main className="container mx-auto px-4 flex min-h-[calc(100vh-80px)] items-start">
        <div className="flex-1 flex flex-col justify-start max-w-xl pt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-20 bg-green-500"></div>
            <span className="text-green-400 font-medium">
              ECO-FRIENDLY FUTURE
            </span>
          </div>
          <h2 className="text-7xl font-bold text-white leading-tight mb-6">
            Climate Action,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Gamified
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join your friends in making a real impact on our planet. Track your
            carbon footprint, plant trees, and compete in eco-challenges.
          </p>
          <div className="flex gap-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6 rounded-full"
              onClick={() => navigate("/challenges")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 text-lg px-10 py-6 rounded-full"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Carbon Tracking</h3>
              <p className="text-white/70 text-sm">Monitor your daily impact</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <Droplet className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">
                Water Conservation
              </h3>
              <p className="text-white/70 text-sm">Save water, earn points</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                <TreePine className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Tree Planting</h3>
              <p className="text-white/70 text-sm">Grow your impact</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center relative pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-[600px] h-[600px] flex items-center justify-center">
            {/* Main Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe2 className="w-96 h-96 text-teal-400/80" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 animate-bounce">
              <Cloud className="w-16 h-16 text-blue-400/80" />
            </div>
            <div
              className="absolute bottom-32 right-24 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <Cloud className="w-12 h-12 text-blue-400/80" />
            </div>
            <div className="absolute top-32 right-24 animate-pulse">
              <Sun className="w-20 h-20 text-yellow-400/80" />
            </div>
            <div
              className="absolute bottom-24 left-32 animate-pulse"
              style={{ animationDelay: "0.7s" }}
            >
              <TreePine className="w-24 h-24 text-green-400/80" />
            </div>
            <div
              className="absolute top-1/2 right-16 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            >
              <TreePine className="w-16 h-16 text-green-400/80" />
            </div>
            <div
              className="absolute top-40 left-1/2 animate-pulse"
              style={{ animationDelay: "0.9s" }}
            >
              <Wind className="w-16 h-16 text-white/50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
