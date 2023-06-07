import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection/Pages/HeroSection.jsx";
import ErrorSection from "./HeroSection/Pages/ErrorSection.jsx";
import Contact from "./Navigation/Contact/Contact.jsx";
import Login from "./Auth/Login/Login.jsx"

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/nonfound" element={<ErrorSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account/login" element={<Login />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
