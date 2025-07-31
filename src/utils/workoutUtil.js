export const generateWorkoutPlan = (goal) => {
    const basePlans = {
      bulking: [
        ["Barbell Squat", "Bench Press", "Deadlift"],
        ["Overhead Press", "Barbell Row", "Pull-Ups"],
        ["Deadlifts", "Leg Press", "Dumbbell Bench Press"],
        ["Incline Bench Press", "Front Squats", "Chin-Ups"],
        ["Romanian Deadlifts", "Push-ups", "Lat Pulldown"],
        ["Arnold Press", "Leg Curl", "Triceps Dips"],
        ["Rest or Cardio"]
      ],
      cutting: [
        ["Jump Rope", "Burpees", "Bodyweight Squats"],
        ["Mountain Climbers", "Push-ups", "Plank"],
        ["Lunges", "Dumbbell Shoulder Press", "Russian Twists"],
        ["High Knees", "Jumping Jacks", "Crunches"],
        ["Stair Climber", "Kettlebell Swings", "Sit-ups"],
        ["Battle Ropes", "Box Jumps", "TRX Rows"],
        ["Rest or Light Walk"]
      ],
      maintenance: [
        ["Squats", "Push-ups", "Walking Lunges"],
        ["Plank", "Deadlifts", "Shoulder Press"],
        ["Jogging", "Pull-Ups", "Crunches"],
        ["Bench Press", "Dumbbell Rows", "Leg Press"],
        ["Bicycle Crunches", "Overhead Dumbbell Press", "Step-Ups"],
        ["Yoga or Stretching"],
        ["Rest"]
      ]
    };
  
    return basePlans[goal] || basePlans.maintenance;
  };