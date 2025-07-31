import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

import Dashboard from "./pages/Dashboard";
import WorkoutPlanner from "./pages/WorkoutPlanner";
import DietPlanner from "./pages/DietPlanner";
import Equipment from "./pages/Equipment";
import Clients from "./pages/Clients";
import GoalPlanner from "./pages/GoalPlanner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddMember from "./pages/AddMember";

const App = () => {
  const [user, setUser] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("loggedInUser");
    if (isLoggedIn === "true" && email) {
      setUser({ email });
    }
  }, []);

  const handleAuth = (email) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", email);
    setUser({ email });
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} logout={logout} onToggleChat={() => setChatOpen(!chatOpen)} />

      {chatOpen && <Chatbot onClose={() => setChatOpen(false)} />}

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/workout-planner" element={user ? <WorkoutPlanner /> : <Navigate to="/login" />} />
          <Route path="/diet-planner" element={user ? <DietPlanner /> : <Navigate to="/login" />} />
          <Route path="/clients" element={user ? <Clients /> : <Navigate to="/login" />} />
          <Route path="/equipment" element={user ? <Equipment /> : <Navigate to="/login" />} />
          <Route path="/goal-planner" element={user ? <GoalPlanner /> : <Navigate to="/login" />} />
          <Route path="/add-member" element={user ? <AddMember /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onAuth={handleAuth} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
