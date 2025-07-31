export const fetchPlanFromLocalAI = async (form) => {
    const { age, gender, height, weight, goal } = form;
  
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
  
    let calories = bmr;
    if (goal.toLowerCase().includes("bulk") || goal.toLowerCase().includes("gain")) {
      calories += 500;
    } else if (goal.toLowerCase().includes("cut")) {
      calories -= 500;
    }
  
    const protein = weight * 2.2; // in grams
    const fat = (calories * 0.25) / 9; // in grams
    const carbs = (calories - (protein * 4 + fat * 9)) / 4; // in grams
  
    return {
      calories: Math.round(calories),
      protein: Math.round(protein),
      fat: Math.round(fat),
      carbs: Math.round(carbs),
    };
  };
  