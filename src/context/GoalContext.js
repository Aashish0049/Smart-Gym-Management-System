import React, { createContext, useContext, useState } from "react";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goal, setGoal] = useState(null);
  const [macroInfo, setMacroInfo] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [dietPlan, setDietPlan] = useState([]);

  return (
    <GoalContext.Provider
      value={{ goal, setGoal, macroInfo, setMacroInfo, workoutPlan, setWorkoutPlan, dietPlan, setDietPlan }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => useContext(GoalContext);