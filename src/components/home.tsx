import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">CLIMATEQUEST</h1>
        <div className="flex gap-8 items-center">
          <Link to="/challenges" className="text-white hover:text-gray-300">
            Challenges
          </Link>
          <Link to="/community" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Button
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
          >
            Login
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 flex min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col justify-center max-w-xl py-20">
          <h2 className="text-7xl font-bold text-white leading-tight mb-6">
            Climate Action,
            <br />
            Gamified
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join your friends in making a real impact on our planet
          </p>
          <div className="flex gap-6">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 text-lg px-10 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/high-resolution-transparent-earth-globe-png-featuring-continents-latitude-longitude-mercator-projection-338513730.jpg"
            alt="Earth Illustration"
            className="w-[700px] h-[700px] object-contain"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
