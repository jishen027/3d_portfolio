import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router basename="/3d_portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
