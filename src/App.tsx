import { Routes, Route } from "react-router-dom";
import { UserProvider } from "@/lib/contexts/UserContext";
import Home from "./components/home";
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";
import ChallengesPage from "./components/challenges/ChallengesPage";
import CarbonFootprint from "./components/carbon/CarbonFootprint";
import WaterConsumptionWidget from "./components/dashboard/WaterConsumptionWidget";
import TreePlantingWidget from "./components/dashboard/TreePlantingWidget";
import CommunityPage from "./components/community/CommunityPage";
import AboutPage from "./components/about/AboutPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import FAQPage from "./components/faq/FAQPage";
import ChatWidget from "./components/ui/chat-widget";
import MembershipLevels from "./components/auth/MembershipLevels";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenges/carbon" element={<CarbonFootprint />} />
        <Route path="/challenges/water" element={<WaterConsumptionWidget />} />
        <Route path="/challenges/trees" element={<TreePlantingWidget />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/membership" element={<MembershipLevels />} />
        <Route path="*" element={<Home />} /> {/* Add catch-all route */}
      </Routes>
      <ChatWidget />
    </UserProvider>
  );
}

export default App;
