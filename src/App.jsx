import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-900 h-full flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
