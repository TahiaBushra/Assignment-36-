import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const [state, dispatch] = useContext(ProductContext);

  return (
    <div className="max-w-md mx-auto mt-8 justify-center antialiased">
      <h2 className="text-2xl font-bold mb-4 underline decoration-wavy">
        Product List
      </h2>

      {state.products.length > 0 ? (
        <ul className="pl-4 list-decimal font-bold">
          {state.products.map((product) => (
            <li key={product.id} className="mb-4">
              <h3 className="text-lg font-semibold">
                {product.title} (Quantity: {product.quantity})
              </h3>
              <div className="mt-2">
                {product.quantity > 0 && (
                  <button
                    className="bg-sky-400 text-white hover:bg-teal-600 transition duration-300 px-4 py-2 mr-2 rounded font-semibold"
                    onClick={() =>
                      dispatch({ type: "BUY", payload: product.id })
                    }
                  >
                    Buy
                  </button>
                )}
                <button
                  className="bg-red-500 text-white hover:bg-red-950 transition duration-300 px-4 py-2 mr-2 rounded font-semibold"
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: product.id })
                  }
                >
                  Remove
                </button>
                <button
                  className="bg-green-500 text-white hover:bg-lime-300 transition duration-300 px-4 py-2 rounded font-semibold"
                  onClick={() =>
                    dispatch({ type: "RESTOCK", payload: product.id })
                  }
                >
                  Restock
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Empty List!</p>
      )}
    </div>
  );
};

export default ProductList;
