import { useCallback, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = useCallback(() => {
    setCount(count - 1);
  }, []);

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div className="flex items-center text-center justify-center m-10">
      <p className="text-xl mr-4 font-semibold">Count: {count}</p>
      <button
        className="text-lg bg-gray-400 hover:bg-slate-600 text-white transition duration-300 px-3 py-1 rounded-full font-semibold"
        onClick={handleDecrease}
      >
        -
      </button>
      <button
        className="text-lg bg-fuchsia-500 text-white hover:bg-teal-700 transition duration-300 px-3 py-1 ml-2 rounded-full font-semibold"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Memo;
