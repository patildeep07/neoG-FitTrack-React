import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodItem, fetchFoodItems } from "../actions/actions";
import { FoodCard } from "../components/cards";

const Food = () => {
  const [showAddFoodItemForm, setShowAddFoodItemForm] = useState(false);

  const [foodItemForm, setfoodItemForm] = useState({
    foodName: "",
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0
  });

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, []);

  const dispatch = useDispatch();

  const foodItems = useSelector((state) => state.foodItems);

  const submitButtonHandler = () => {
    console.log(foodItemForm);
    if (foodItemForm.foodName) {
      dispatch(addFoodItem(foodItemForm));

      setfoodItemForm({
        ...foodItemForm,
        foodName: "",
        calories: 0,
        protein: 0,
        fat: 0,
        carbohydrates: 0
      });

      setShowAddFoodItemForm(false);
    } else {
      alert("Fill the valid details");
    }
  };

  return (
    <div>
      <h2>Food</h2>
      <div className="flex-row">
        {foodItems.map((foodItem) => {
          return <FoodCard key={foodItem._id} foodDetails={foodItem} />;
        })}
      </div>
      <button
        className="green-button"
        onClick={() => setShowAddFoodItemForm(true)}
      >
        Click here to add a new food item
      </button>

      {showAddFoodItemForm && (
        <div className="form-outline">
          <h3>ADD A NEW FOOD ITEM</h3>
          <div className="flex-row">
            <label htmlFor="food-item-name">Food item name:</label>
            <input
              id="food-item-name"
              placeholder="Chole Bhature"
              value={foodItemForm.foodName}
              onChange={(e) =>
                setfoodItemForm({
                  ...foodItemForm,
                  foodName: e.target.value
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="calories">Calories (kcal) :</label>
            <input
              id="calories"
              type="number"
              min={0}
              value={foodItemForm.calories}
              onChange={(e) =>
                setfoodItemForm({
                  ...foodItemForm,
                  calories: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="protein">Protein (gm) :</label>
            <input
              id="protein"
              type="number"
              min={0}
              value={foodItemForm.protein}
              onChange={(e) =>
                setfoodItemForm({
                  ...foodItemForm,
                  protein: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="fat">Fat (gm) :</label>
            <input
              id="fat"
              type="number"
              min={0}
              value={foodItemForm.fat}
              onChange={(e) =>
                setfoodItemForm({
                  ...foodItemForm,
                  fat: Number(e.target.value)
                })
              }
            />
          </div>

          <div className="flex-row">
            <label htmlFor="carbohydrates">Carbohydrates (gm) :</label>
            <input
              id="carbohydrates"
              type="number"
              min={0}
              value={foodItemForm.carbohydrates}
              onChange={(e) =>
                setfoodItemForm({
                  ...foodItemForm,
                  carbohydrates: Number(e.target.value)
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
              onClick={() => setShowAddFoodItemForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
