import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const [state, dispatch] = useContext(ProductContext);
  return (
    <div>
      <h2>Product List</h2>
      {state.products.length > 0 && (
        <ul>
          {state.products.map((product) => (
            <li key={product.id}>
              <h3>
                {product.title} (Quantity:{product.quantity})
              </h3>
              <div>
                {product.quantity > 0 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "BUY", payload: product.id })
                    }
                  >
                    Buy
                  </button>
                )}
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: product.id })
                  }
                >
                  Remove
                </button>
                <button
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
      )}
      {state.product.length === 0 && <p>Empty List!</p>}
    </div>
  );
};

export default ProductList;
