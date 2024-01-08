import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, fetchGoals } from "../actions/actions";
import { GoalCard } from "../components/cards";

const Goals = () => {
  const [showAddGoalsForm, setShowAddGoalsForm] = useState(false);

  const [goalsForm, setGoalsForm] = useState({
    goalName: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "onGoing"
  });

  const dispatch = useDispatch();

  const goals = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, []);

  const submitButtonHandler = () => {
    console.log(goalsForm);
    if (goalsForm.goalName) {
      dispatch(addGoal(goalsForm));

      setGoalsForm({
        ...goalsForm,
        goalName: "",
        description: "",
        targetDate: "",
        targetCalories: 0,
        status: "onGoing"
      });

      setShowAddGoalsForm(false);
    } else {
      alert("Fill the valid details");
    }
  };

  return (
    <div>
      <h2>Goals</h2>
      <div className="flex-row">
        {goals.map((goal) => {
          return <GoalCard key={goal._id} goalDetails={goal} />;
        })}
      </div>

      <button
        className="green-button"
        onClick={() => setShowAddGoalsForm(true)}
      >
        Click here to add a new goal
      </button>

      {showAddGoalsForm && (
        <div className="form-outline">
          <h3>ADD A NEW GOAL</h3>
          <div className="flex-row">
            <label htmlFor="goal-name">Goal name:</label>
            <input
              id="goal-name"
              placeholder="Get lean"
              value={goalsForm.goalName}
              onChange={(e) =>
                setGoalsForm({
                  ...goalsForm,
                  goalName: e.target.value
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="Description">Description: </label>
            <textarea
              id="Description"
              value={goalsForm.description}
              placeholder="Eat more protein, and less carbs"
              onChange={(e) =>
                setGoalsForm({
                  ...goalsForm,
                  description: e.target.value
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="target-date">Target date:</label>
            <input
              id="target-date"
              type="date"
              value={goalsForm.targetDate}
              onChange={(e) =>
                setGoalsForm({
                  ...goalsForm,
                  targetDate: e.target.value
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="target-calories">Target calories: </label>
            <input
              id="target-calories"
              type="number"
              min={0}
              value={goalsForm.targetCalories}
              onChange={(e) =>
                setGoalsForm({
                  ...goalsForm,
                  targetCalories: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <label>Status: </label>
            <select
              value={goalsForm.status}
              onChange={(e) =>
                setGoalsForm({
                  ...goalsForm,
                  status: e.target.value
                })
              }
            >
              <option value="onGoing">On going</option>
              <option value="completed">Completed</option>
              <option value="abandoned">Abandoned</option>
            </select>
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
              onClick={() => setShowAddGoalsForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;
