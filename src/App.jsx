import Counter from "./assets/components/Counter";
import { StoreProvider } from "./assets/components/ProductContext";
import ProductList from "./assets/components/ProductList";

const App = () => {
  return (
    <StoreProvider>
      <Counter />
      <ProductList />
    </StoreProvider>
  );
};

export default App;
