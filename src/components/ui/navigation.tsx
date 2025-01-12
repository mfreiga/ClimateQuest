import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

interface NavigationProps {
  showLogin?: boolean;
  showBack?: boolean;
}

const Navigation = ({ showLogin = true, showBack = true }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <nav className="container mx-auto px-4 py-6 flex items-center">
      {showBack && (
        <button
          className="text-white mr-4 hover:text-gray-300"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}
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
        <Link to="/community" className="text-white hover:text-gray-300">
          Community
        </Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/faq" className="text-white hover:text-gray-300">
          FAQ
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About Us
        </Link>
        {showLogin && (
          <Button
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
