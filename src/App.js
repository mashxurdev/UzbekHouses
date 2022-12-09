import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopMenu from "./components/top-menu/top-menu";
import Homepage from "./pages/homepage/homepage";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Loading from "./pages/loading/loading";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4900);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <TopMenu />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
