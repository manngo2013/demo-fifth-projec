import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {
  const initProducts = [
    {
      id: 1,
      name: "Iphone 10 Pro Max",
      price: 1000,
      content: "This is description or content of this product, .....",
      status: "inActive",
    },
    {
      id: 2,
      name: "Iphone 11 Pro Max",
      price: 1200,
      content: "This is description or content of this product, .....",
      status: "active",
    },
    {
      id: 3,
      name: "Iphone 13 Pro Max",
      price: 1500,
      content: "This is description or content of this product, .....",
      status: "active",
    },
    {
      id: 4,
      name: "Iphone 14 Pro Max",
      price: 2000,
      content: "This is description or content of this product, .....",
      status: "new",
    },
  ];

  const [products, setProducts] = useState(initProducts);

  const removeProduct = (id) => {
    console.log("Test: ", id);
    // clone current array to the new array
    let newProducts = [...products];
    newProducts = newProducts.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  return (
    <div className="App">
      <h1>Product Management</h1>
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  );
}

export default App;
