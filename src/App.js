import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

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

  const location = useLocation();
  const [products, setProducts] = useState(initProducts);
  const [filteredStatus, setFilteredStatus] = useState('all');

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  const renderProducts = products.filter((product) => filteredStatus === "all" || filteredStatus === product.status);

  const removeProduct = (id) => {
    console.log("Test: ", id);
    // clone current array to the new array
    let newProducts = [...products];
    newProducts = newProducts.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  return (
    <div className="App">
      <Header />
      <h1>Product Management</h1>
      <ProductList products={renderProducts} removeProduct={removeProduct} />
    </div>
  );
}

export default App;
