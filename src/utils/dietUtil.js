// src/utils/dietUtil.js

const getMealWithNutrition = (name, time, calories, protein, carbs, fat) => ({
    name,
    time,
    calories,
    protein,
    carbs,
    fat,
  });
  
  const generateDailyMeals = (goal, macros, preference) => {
    const { calories, protein, carbs, fat } = macros;
  
    const baseMeals = preference === 'vegetarian'
      ? [
          getMealWithNutrition("Oats with fruits", "8:00 AM", 400, 15, 60, 10),
          getMealWithNutrition("Paneer sandwich", "11:00 AM", 350, 20, 30, 15),
          getMealWithNutrition("Vegetable pulao + salad", "2:00 PM", 500, 20, 60, 20),
          getMealWithNutrition("Nuts and seeds", "5:00 PM", 250, 10, 10, 20),
          getMealWithNutrition("Tofu curry + roti", "8:00 PM", 500, 30, 50, 15),
        ]
      : preference === 'keto'
      ? [
          getMealWithNutrition("Egg omelet + avocado", "8:00 AM", 450, 25, 10, 35),
          getMealWithNutrition("Almonds + cheese cubes", "11:00 AM", 300, 15, 5, 25),
          getMealWithNutrition("Grilled chicken salad", "2:00 PM", 500, 40, 10, 30),
          getMealWithNutrition("Boiled eggs + nuts", "5:00 PM", 250, 20, 5, 20),
          getMealWithNutrition("Fish curry + sautéed spinach", "8:00 PM", 500, 35, 10, 25),
        ]
      : [
          getMealWithNutrition("Scrambled eggs + toast", "8:00 AM", 400, 25, 30, 20),
          getMealWithNutrition("Greek yogurt + berries", "11:00 AM", 300, 20, 25, 10),
          getMealWithNutrition("Grilled chicken + rice + veggies", "2:00 PM", 600, 45, 50, 20),
          getMealWithNutrition("Protein shake + banana", "5:00 PM", 300, 25, 30, 5),
          getMealWithNutrition("Salmon + quinoa + broccoli", "8:00 PM", 500, 35, 40, 15),
        ];
  
    // Adjust the macros of meals based on the target (optional improvement)
    return baseMeals;
  };
  
  export const generateWeeklyDietPlan = (goal, macros, preference) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const plan = days.map((day) => ({
      day,
      meals: generateDailyMeals(goal, macros, preference),
    }));
    return plan;
  };
  