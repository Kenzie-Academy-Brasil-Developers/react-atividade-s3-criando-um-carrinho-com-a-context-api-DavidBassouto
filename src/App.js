import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <header className="App-header">
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </header>
    </>
  );
}

export default App;
