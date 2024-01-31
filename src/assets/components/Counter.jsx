import { useReducer } from "react";

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  return (
    <div className="p-10 justify-center items-centern text-center antialiased">
      <p className="text-2xl font-semibold">Count : {state.count}</p>
      <div class="mt-4">
        <button
          onClick={handleDecrease}
          className="px-4 py-2 mr-2 font-semibold bg-red-400 text-white hover:bg-red-950 rounded-full"
        >
          Delete
        </button>
        <button
          onClick={handleIncrease}
          className="px-4 py-2 font-semibold bg-green-600 text-white hover:bg-lime-400 rounded-full"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
