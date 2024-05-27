import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import MyPlanner from "./pages/my-planner/MyPlanner";
// import MyArchive from "./pages/my-archive/MyArchive";
import Notes from "./pages/notes/Notes";
import Calendar from "./pages/calendar/Calendar";
import Home from "./pages/home/home.js";
import SignIn from "./pages/login-and-register/Login/SignIn";
import SignUp from "./pages/login-and-register/Register/SignUp";
import PageNotFound from "./pages/notfound/404-page";
import GoalTracking from "./pages/goal-tracking/GoalTracking";

function App() {
  return (
      <Router>
        <Routes>
          <Route
              path="/"
              element={<Home />
              }
          />
          <Route
              path="/signin"
              element={<SignIn />}
          />
          <Route
              path="/signup"
              element={<SignUp />}
          />
          <Route
              path="/my-planner"
              element={
                <Sidebar>
                  <Navbar />
                  <MyPlanner />
                </Sidebar>
              }
          />
          <Route
              path="/calendar"
              element={
                <Sidebar>
                  <Navbar />
                  <Calendar />
                </Sidebar>
              }
          />
          <Route
              path="/notes"
              element={
                <Sidebar>
                  <Navbar />
                  <Notes />
                </Sidebar>
              }
          />
          <Route
              path="/goals"
              element={
                <Sidebar>
                  <Navbar />
                  <GoalTracking />
                </Sidebar>
              }
          />
          {/* <Route
              path="/archive"
              element={
                <Sidebar>
                  <Navbar />
                  <MyArchive />
                </Sidebar>
              }
          /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
