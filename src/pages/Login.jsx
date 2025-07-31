import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const Login = ({ onAuth }) => {
  const [error, setError] = useState("");

  const handleLogin = (email, password) => {
    const userData = localStorage.getItem(email);
    if (!userData) {
      setError("User not found");
      return;
    }

    const user = JSON.parse(userData);
    if (user.password !== password) {
      setError("Invalid password");
      return;
    }

    onAuth(email);
  };

  return <AuthForm type="login" onSubmit={handleLogin} error={error} />;
};

export default Login;