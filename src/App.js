import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AdoptACat from "./pages/AdoptACat";
import AdoptADog from "./pages/AdoptADog";
import ErrorPage from "./pages/ErrorPage"
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar /> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/cats" element={<AdoptACat />} /> 
          <Route path="/dogs" element={<AdoptADog />} /> 
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
