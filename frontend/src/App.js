import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BobbleheadPage from "./pages/BobbleheadPage";
import MusicGenPage from "./pages/MusicGenPage";
import VideoGenPage from "./pages/VideoGenPage";
import PortfolioPage from "./pages/PortfolioPage";
import KritaPage from "./pages/KritaPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bobblehead" element={<BobbleheadPage />} />
          <Route path="/music-generation" element={<MusicGenPage />} />
          <Route path="/video-generation" element={<VideoGenPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/krita-lora" element={<KritaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
