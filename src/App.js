import { HOME, LOGIN, SOCIAL, PLANNER, INVITE } from "./components/constants/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./pages/login-and-register";
import SocialMedia from "./pages/social-media";
import TimePlanner from "./pages/time-planner";
import Header from "./layouts/header";
import HomePage from "./pages/home";
import Invite from "./pages/invite";
import React from "react";
import "./App.css";

const App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={LOGIN} element={<LoginAndRegister />} />
        <Route path={HOME} element={<HomePage />} />
        <Route path={SOCIAL} element={<SocialMedia />} />
        <Route path={PLANNER} element={<TimePlanner />} />
        <Route path={INVITE} element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;