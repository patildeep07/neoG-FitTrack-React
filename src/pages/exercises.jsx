import { useEffect, useState } from "react";
import { addExercise, fetchExercises } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { ExerciseCard } from "../components/cards";

const Exercises = () => {
  const [showAddExerciseForm, setShowAddExerciseForm] = useState(false);

  const [exerciseForm, setExerciseForm] = useState({
    exerciseName: "",
    duration: 0,
    caloriesBurned: 0
  });

  const dispatch = useDispatch();

  const exercises = useSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const submitButtonHandler = () => {
    if (exerciseForm.exerciseName !== "") {
      dispatch(addExercise(exerciseForm));

      setExerciseForm({
        ...exerciseForm,
        exerciseName: "",
        duration: 0,
        caloriesBurned: 0
      });

      setShowAddExerciseForm(false);
    } else {
      alert("Fill the valid details");
    }
  };

  return (
    <div>
      <h2>Exercises</h2>
      <div className="flex-row">
        {exercises.map((exercise) => {
          return <ExerciseCard key={exercise._id} exerciseDetails={exercise} />;
        })}
      </div>
      <button
        className="green-button"
        onClick={() => setShowAddExerciseForm(true)}
      >
        Click here to add a new exercise
      </button>

      {showAddExerciseForm && (
        <div className="form-outline">
          <h3>ADD A NEW EXERCISE</h3>
          <div className="flex-row">
            <label htmlFor="exercise-name">Exercise name:</label>
            <input
              id="exercise-name"
              value={exerciseForm.exerciseName}
              onChange={(e) =>
                setExerciseForm({
                  ...exerciseForm,
                  exerciseName: e.target.value
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="Duration">Duration (seconds) :</label>
            <input
              id="Duration"
              type="number"
              min={0}
              value={exerciseForm.duration}
              onChange={(e) =>
                setExerciseForm({
                  ...exerciseForm,
                  duration: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="calories-burned">Calories burned (kcal) :</label>
            <input
              id="calories-burned"
              type="number"
              min={0}
              value={exerciseForm.caloriesBurned}
              onChange={(e) =>
                setExerciseForm({
                  ...exerciseForm,
                  caloriesBurned: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <button
              className="green-button"
              onClick={() => submitButtonHandler()}
            >
              Submit
            </button>
            <button
              className="red-button"
              onClick={() => setShowAddExerciseForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
