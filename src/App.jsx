import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navebar"; 
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { WatchListProvider } from "./context/WatchListContext";

function App() {
  return (
    <BrowserRouter>
      <WatchListProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </WatchListProvider>
    </BrowserRouter>
  );
}

export default App;


