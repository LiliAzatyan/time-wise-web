import { LOGIN } from "./components/constants/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./pages/login-and-register";
import React from "react";
import "./App.css";

const App = () => {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginAndRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;