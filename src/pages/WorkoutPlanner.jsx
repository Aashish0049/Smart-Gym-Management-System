import React from "react";
import { useGoal } from "../context/GoalContext";

const WorkoutPlanner = () => {
  const { goal, workoutPlan } = useGoal();

  if (!goal || !workoutPlan) return <p className="p-4">Please set a goal first.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🏋️ Your 7-Day Workout Plan</h2>
      <div className="space-y-4">
        {workoutPlan.map((dayPlan, index) => (
          <div key={index} className="p-4 border rounded bg-white shadow">
            <h3 className="font-bold text-lg">Day {index + 1}</h3>
            <ul className="list-disc list-inside">
              {dayPlan.map((exercise, idx) => (
                <li key={idx}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanner;
