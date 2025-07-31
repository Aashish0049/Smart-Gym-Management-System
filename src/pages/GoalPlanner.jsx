import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoal } from "../context/GoalContext";
import { generateWorkoutPlan } from "../utils/workoutUtil";
import { generateWeeklyDietPlan } from "../utils/dietUtil";

const GoalPlanner = () => {
  const navigate = useNavigate();
  const {
    setGoal,
    setWorkoutPlan,
    setMacroInfo,
    setDietPlan,
  } = useGoal();

  const [formData, setFormData] = useState({
    gender: "male",
    age: "",
    height: "",
    weight: "",
    activityLevel: "moderate",
    goalType: "maintenance",
    dietPreference: "none",
  });

  const [macroDetails, setMacroDetails] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGenerate = () => {
    const { age, weight, height, gender, activityLevel, goalType, dietPreference }
     = formData;
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageNum = parseInt(age);

    if (isNaN(weightInKg) || isNaN(heightInCm) || isNaN(ageNum)) {
      alert("Please enter valid age, height, and weight.");
      return;
    }

    // BMR calculation (Mifflin-St Jeor)
    let bmr =
      gender === "male"
        ? 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum + 5
        : 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum - 161;

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const calorieNeeds = bmr * activityMultipliers[activityLevel];

    let adjustedCalories = calorieNeeds;
    if (goalType === "bulking") adjustedCalories += 500;
    else if (goalType === "cutting") adjustedCalories -= 500;

    const protein = weightInKg * 2;
    const fat = weightInKg * 1;
    const carbs = (adjustedCalories - protein * 4 - fat * 9) / 4;

    const macroInfo = {
      calories: Math.round(adjustedCalories),
      protein: Math.round(protein),
      fat: Math.round(fat),
      carbs: Math.round(carbs),
    };

    setGoal(formData);
    setWorkoutPlan(generateWorkoutPlan(goalType));
    setMacroInfo(macroInfo);
    setMacroDetails(macroInfo);
    setDietPlan(
      generateWeeklyDietPlan(macroInfo, dietPreference)
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Goal Planner</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          ["gender", "Gender", "select", ["male", "female"]],
          ["age", "Age", "number"],
          ["height", "Height (cm)", "number"],
          ["weight", "Weight (kg)", "number"],
          ["activityLevel", "Activity Level", "select", ["sedentary", "light", "moderate",
             "active", "very_active"]],
          ["goalType", "Goal", "select", ["maintenance", "bulking", "cutting"]],
          ["dietPreference", "Diet Preference", "select", ["none", "vegetarian", "keto"]],
        ].map(([name, label, type, options]) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            {type === "select" ? (
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border px-2 py-1 rounded"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Plan
      </button>

      {macroDetails && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Your Daily Macros:</h3>
          <p>Calories: {macroDetails.calories} kcal</p>
          <p>Protein: {macroDetails.protein} g</p>
          <p>Fat: {macroDetails.fat} g</p>
          <p>Carbs: {macroDetails.carbs} g</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/workout-planner")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              View Workout Plan
            </button>
            <button
              onClick={() => navigate("/diet-planner")}
              className="bg-orange-600 text-white px-4 py-2 rounded"
            >
              View Diet Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalPlanner;
