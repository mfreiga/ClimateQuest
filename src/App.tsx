import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import ChallengesPage from "./components/challenges/ChallengesPage";
import CommunityPage from "./components/community/CommunityPage";
import AboutPage from "./components/about/AboutPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
