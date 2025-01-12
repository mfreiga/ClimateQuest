import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ChallengesPage from "./components/challenges/ChallengesPage";
import CarbonFootprint from "./components/carbon/CarbonFootprint";
import WaterConsumptionWidget from "./components/dashboard/WaterConsumptionWidget";
import TreePlantingWidget from "./components/dashboard/TreePlantingWidget";
import CommunityPage from "./components/community/CommunityPage";
import AboutPage from "./components/about/AboutPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import FAQPage from "./components/faq/FAQPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="/challenges/carbon" element={<CarbonFootprint />} />
      <Route path="/challenges/water" element={<WaterConsumptionWidget />} />
      <Route path="/challenges/trees" element={<TreePlantingWidget />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}

export default App;
