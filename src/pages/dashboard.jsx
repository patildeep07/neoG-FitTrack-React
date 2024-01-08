import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises, fetchFoodItems, fetchGoals } from "../actions/actions";

const Dashboard = () => {
  const goals = useSelector((state) => state.goals);
  const exercises = useSelector((state) => state.exercises);
  const foodItems = useSelector((state) => state.foodItems);

  const totalCaloriesBurned = exercises.reduce(
    (acc, exercise) => acc + exercise.caloriesBurned,
    0
  );

  const totalCaloriesConsumed = foodItems.reduce(
    (acc, foodItem) => acc + foodItem.calories,
    0
  );

  const totalCaloriesGoal = goals.reduce(
    (acc, goal) =>
      goal.status === "onGoing" ? acc + goal.targetCalories : acc,
    0
  );

  const remainingCaloriesToGoal = totalCaloriesGoal - totalCaloriesConsumed;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchExercises());
    dispatch(fetchFoodItems());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="flex-row">
        <div className="card">
          <h3>{totalCaloriesBurned} kcal</h3>
          <h4>Total Calories Burned</h4>
        </div>
        <div className="card">
          <h3>{totalCaloriesConsumed} kcal</h3>
          <h4>Total Calories Consumed</h4>
        </div>
      </div>

      <div className="flex-row">
        <div className="card">
          <h3>{totalCaloriesGoal} kcal</h3>
          <h4>Total Calories Goal</h4>
        </div>
        <div className="card">
          <h3>{remainingCaloriesToGoal} kcal</h3>
          <h4>Remaining Calories to Goal</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
