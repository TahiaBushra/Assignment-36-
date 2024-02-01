import Counter from "./assets/components/Counter";
import Memo from "./assets/components/Memo";
import { StoreProvider } from "./assets/components/ProductContext";
import ProductList from "./assets/components/ProductList";

const App = () => {
  return (
    <>
      <StoreProvider>
        <ProductList />
        <Counter />
      </StoreProvider>
      <Memo />
    </>
  );
};

export default App;
