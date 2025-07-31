import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Navbar = ({ user, logout, onToggleChat }) => {
  const location = useLocation();

  const links = [
    { label: "Dashboard", path: "/" },
    { label: "Workout", path: "/workout-planner" },
    { label: "Diet", path: "/diet-planner" },
    { label: "Clients", path: "/clients" },
    { label: "Equipment", path: "/equipment" },
    { label: "Goal Planner", path: "/goal-planner" },
    { label: "Add Member", path: "/add-member" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow">
      <div className="flex gap-6 items-center">
        <div className="text-xl font-bold">🏋️ GymPro</div>

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-yellow-300 text-sm ${
              location.pathname === link.path ? "text-yellow-400 font-semibold" : "text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onToggleChat} className="hover:text-yellow-300" title="AI Chat Assistant">
          <MessageSquare size={22} />
        </button>

        {!user ? (
          <>
            <Link to="/login" className="hover:text-yellow-300 mr-2">Login</Link>
            <Link to="/register" className="hover:text-yellow-300">Register</Link>
          </>
        ) : (
          <>
            <span className="text-sm text-gray-300 hidden sm:inline">👋 {user.email}</span>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-sm px-3
             py-1 rounded text-white">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
