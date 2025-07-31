import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegister = (email, password) => {
    if (localStorage.getItem(email)) {
      setError("User already exists");
      return;
    }

    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert("Registration successful. You can now log in.");
  };

  return <AuthForm type="register" onSubmit={handleRegister} error={error} />;
};

export default Register;