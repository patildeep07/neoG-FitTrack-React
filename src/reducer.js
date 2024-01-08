const initialState = {
  loading: false,
  error: null,
  exercises: [],
  goals: [],
  foodItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADING_TRUE":
      return {
        ...state,
        loading: true
      };

    case "DATA_LOADING_FALSE":
      return {
        ...state,
        loading: false
      };

    // Exercises reducer

    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        error: null
      };

    case "FETCH_EXERCISES":
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_EXERCISES_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching exercises."
      };

    case "ADD_EXERCISES_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error adding exercise."
      };

    case "REMOVE_EXERCISES_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error removing exercise."
      };

    case "REMOVE_EXERCISE": {
      console.log("Remove exercise");
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise._id !== action.payload.exerciseID
        ),
        loading: false,
        error: null
      };
    }

    // Food reducer

    case "ADD_FOOD":
      return {
        ...state,
        foodItems: [...state.foodItems, action.payload],
        error: null
      };

    case "FETCH_FOOD":
      return {
        ...state,
        foodItems: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_FOOD_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching food items."
      };

    case "REMOVE_FOOD":
      return {
        ...state,
        foodItems: state.foodItems.filter(
          (food) => food._id !== action.payload.foodItemID
        ),
        loading: false,
        error: null
      };

    case "ADD_FOOD_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error adding food items."
      };

    case "REMOVE_FOOD_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error removing food item."
      };

    // Goals reducer

    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
        error: null
      };

    case "FETCH_GOALS":
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_GOAL_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error fetching goals."
      };

    case "REMOVE_GOAL":
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id !== action.payload.goalID),
        loading: false,
        error: null
      };

    case "ADD_GOAL_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error adding goals."
      };

    case "REMOVE_GOAL_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error removing goals."
      };

    default:
      return state;
  }
};

export default reducer;
