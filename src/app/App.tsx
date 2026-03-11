import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Land/LandPage";
import Browse from "../pages/Browse/Browse";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
