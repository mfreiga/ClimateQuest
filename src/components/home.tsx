import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Droplet } from "lucide-react";
import Navigation from "./ui/navigation";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation />

      <main className="container mx-auto px-4 flex min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col justify-center max-w-xl py-20">
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
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
          <img
            src="/earth-illustration.png"
            alt="Earth Illustration"
            className="w-[700px] h-[700px] object-contain relative z-10"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
