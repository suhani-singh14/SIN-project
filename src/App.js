import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RecommendationPage from "./pages/RecommendationPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recommendations" element={<RecommendationPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
