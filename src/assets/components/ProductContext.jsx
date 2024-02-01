import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      title: "Nutella",
      quantity: 100,
    },
    {
      id: 2,
      title: "Oreo",
      quantity: 150,
    },
    {
      id: 3,
      title: "Maltesers",
      quantity: 300,
    },
    {
      id: 4,
      title: "Weetabix",
      quantity: 250,
    },
    {
      id: 5,
      title: "Reese's",
      quantity: 500,
    },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "RESTOCK":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 10 }
            : product
        ),
      };
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
