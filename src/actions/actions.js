import axios from "axios";

// General util

export const setLoadingTrue = () => async (dispatch) => {
  dispatch({ type: "DATA_LOADING_TRUE" });
};

// Exercises actions:

export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://neog-fittrack.onrender.com/api/exercises"
    );

    const exercises = await response.data.foundExercises;

    dispatch({
      type: "FETCH_EXERCISES",
      payload: exercises,
    });
  } catch (error) {
    console.log("Error fetching exercises ", error);
    dispatch({ type: "FETCH_EXERCISES_ERROR" });
  }
};

export const addExercise = (exerciseDetails) => async (dispatch) => {
  try {
    setLoadingTrue();
    const response = await axios.post(
      "https://neog-fittrack.onrender.com/api/exercises",
      exerciseDetails
    );

    const exercise = await response.data.newExercise;

    dispatch({ type: "ADD_EXERCISE", payload: exercise });
  } catch (error) {
    console.log("Error adding exercise", error);
    dispatch({ type: "ADD_EXERCISES_ERROR" });
  }
};

export const removeExercise = (exerciseID) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://neog-fittrack.onrender.com/api/exercises/${exerciseID}`
    );

    dispatch({ type: "REMOVE_EXERCISE", payload: { exerciseID } });
  } catch (error) {
    console.log("Failed to remove exercise", error);
    dispatch({ type: "REMOVE_EXERCISES_ERROR" });
  }
};

// Food actions:

export const fetchFoodItems = () => async (dispatch) => {
  try {
    setLoadingTrue();
    const response = await axios.get(
      "https://neog-fittrack.onrender.com/api/food"
    );

    const food = await response.data.foundFood;

    dispatch({
      type: "FETCH_FOOD",
      payload: food,
    });
  } catch (error) {
    console.log("Error fetching food items ", error);
    dispatch({ type: "FETCH_FOOD_ERROR" });
  }
};

export const addFoodItem = (foodItemDetails) => async (dispatch) => {
  try {
    setLoadingTrue();
    const response = await axios.post(
      "https://neog-fittrack.onrender.com/api/food",
      foodItemDetails
    );

    const food = await response.data.newFoodItem;

    dispatch({ type: "ADD_FOOD", payload: food });
  } catch (error) {
    console.log("Error adding food item", error);
    dispatch({ type: "ADD_FOOD_ERROR" });
  }
};

export const removeFoodItems = (foodItemID) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://neog-fittrack.onrender.com/api/food/${foodItemID}`
    );

    dispatch({ type: "REMOVE_FOOD", payload: { foodItemID } });
  } catch (error) {
    console.log("Failed to remove food item", error);
    dispatch({ type: "REMOVE_FOOD_ERROR" });
  }
};

// Goals

export const fetchGoals = () => async (dispatch) => {
  try {
    setLoadingTrue();
    const response = await axios.get(
      "https://neog-fittrack.onrender.com/api/goals"
    );

    const goals = await response.data.foundGoals;

    dispatch({
      type: "FETCH_GOALS",
      payload: goals,
    });
  } catch (error) {
    console.log("Error fetching goals ", error);
    dispatch({ type: "FETCH_GOAL_ERROR" });
  }
};

export const addGoal = (goalDetails) => async (dispatch) => {
  try {
    setLoadingTrue();
    const response = await axios.post(
      "https://neog-fittrack.onrender.com/api/goals",
      goalDetails
    );

    const newGoal = await response.data.newGoal;

    console.log({ response });

    dispatch({ type: "ADD_GOAL", payload: newGoal });
  } catch (error) {
    console.log("Error adding goal", error);
    dispatch({ type: "ADD_GOAL_ERROR" });
  }
};

export const removeGoals = (goalID) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://neog-fittrack.onrender.com/api/goals/${goalID}`
    );

    dispatch({ type: "REMOVE_GOAL", payload: { goalID } });
  } catch (error) {
    console.log("Failed to remove goal", error);
    dispatch({ type: "REMOVE_GOAL_ERROR" });
  }
};
