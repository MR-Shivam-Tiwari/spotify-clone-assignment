import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainFooter from "./MainFooter";
import "./App.css";
import Search from "./Components/Search/Search";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="lg:hidden">
  <Navbar />
</div>
      <div style={{ display: "flex", alignItems: "" }}>
        <div className="mx-2 mt-2 mb-0 hidden lg:block" style={{ width: "22%" }}>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <div className="hidden lg:block">
        <MainFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
