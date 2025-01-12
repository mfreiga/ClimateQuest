import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { TreePine, ArrowLeft } from "lucide-react";

interface NavigationProps {
  showBack?: boolean;
  showLogin?: boolean;
}

const Navigation = ({ showBack = true, showLogin = true }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSignOut = () => {
    // In a real app, this would handle sign out logic
    navigate("/");
  };

  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            {!isHome && (
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/10 flex items-center gap-2 text-lg font-semibold"
              onClick={() => navigate("/")}
            >
              ClimateQuest
              <TreePine className="w-6 h-6" />
            </Button>

            <div className="hidden md:flex items-center gap-6 ml-6">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate("/challenges")}
              >
                Challenges
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate("/faq")}
              >
                FAQ
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate("/about")}
              >
                About Us
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {showLogin && (
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            )}
            {!showLogin && (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
