import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection.jsx";
import ErrorSection from "./pages/ErrorSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/nonfound" element={<ErrorSection />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
