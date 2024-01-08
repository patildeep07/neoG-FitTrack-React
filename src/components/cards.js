import { useDispatch } from "react-redux";
import {
  removeExercise,
  removeFoodItems,
  removeGoals
} from "../actions/actions";

export const ExerciseCard = ({ exerciseDetails }) => {
  const { _id, exerciseName, duration, caloriesBurned } = exerciseDetails;

  const dispatch = useDispatch();

  return (
    <div className="card-outline">
      <h3>Exercise name : {exerciseName}</h3>
      <p>Duration: {duration} seconds</p>
      <p>Calories burned: {caloriesBurned} kcal</p>
      <button
        className="red-button"
        onClick={() => dispatch(removeExercise(_id))}
      >
        Remove
      </button>
    </div>
  );
};

export const FoodCard = ({ foodDetails }) => {
  const { _id, foodName, calories, protein, fat, carbohydrates } = foodDetails;

  const dispatch = useDispatch();

  return (
    <div className="card-outline">
      <h3>Food name : {foodName}</h3>
      <p>Calories: {calories} kcal</p>
      <p>Protein: {protein} gm</p>
      <p>Fat: {protein} gm</p>
      <p>Carbohydrates: {carbohydrates} gm</p>
      <button
        className="red-button"
        onClick={() => dispatch(removeFoodItems(_id))}
      >
        Remove
      </button>
    </div>
  );
};

export const GoalCard = ({ goalDetails }) => {
  const {
    _id,
    goalName,
    description,
    targetDate,
    targetCalories,
    status
  } = goalDetails;

  const dispatch = useDispatch();

  return (
    <div className="card-outline">
      <h3>Goal name : {goalName}</h3>
      <p>Description: {description}</p>
      <p>Target date: {targetDate}</p>
      <p>Target calories: {targetCalories} kcal</p>
      <p>Status: {status}</p>
      <button className="red-button" onClick={() => dispatch(removeGoals(_id))}>
        Remove
      </button>
    </div>
  );
};
