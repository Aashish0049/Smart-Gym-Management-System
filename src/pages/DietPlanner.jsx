import React from "react";
import { useGoal } from "../context/GoalContext";

const DietPlanner = () => {
  const { dietPlan } = useGoal();

  if (!dietPlan || dietPlan.length === 0) {
    return <div className="text-red-500">No diet plan generated. Please go to Goal Planner and generate a plan first.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Weekly Diet Plan</h2>
      {dietPlan.map((dayPlan, index) => (
        <div key={index} className="mb-6 border rounded-xl shadow p-4 bg-white">
          <h3 className="text-xl font-semibold mb-4">Day {index + 1}</h3>

          {(dayPlan.meals || []).map((meal, mealIndex) => {
            // Fallbacks to avoid crashing
            const time = meal?.time || "Time N/A";
            const name = meal?.name || "Meal";
            const items = Array.isArray(meal?.items) ? meal.items : ["No items listed"];
            const calories = meal?.calories ?? "N/A";
            const protein = meal?.protein ?? "N/A";
            const carbs = meal?.carbs ?? "N/A";
            const fat = meal?.fat ?? "N/A";

            return (
              <div key={mealIndex} className="mb-4">
                <h4 className="font-bold">
                  {time} - {name}
                </h4>
                <p className="text-gray-700">{items.join(", ")}</p>
                <div className="text-sm text-gray-600 mt-1">
                  Calories: <strong>{calories}</strong> |{" "}
                  Protein: <strong>{protein}g</strong> |{" "}
                  Carbs: <strong>{carbs}g</strong> |{" "}
                  Fat: <strong>{fat}g</strong>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DietPlanner;
