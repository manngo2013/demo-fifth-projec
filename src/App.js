import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useCallback, useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import SampleReactMemo from './components/SampleReactMemo';
import AddProduct from './components/AddProduct';

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

  const addNewProduct = useCallback((product) => {
    // Get prev state of products then copy and push new product
    // this.setState((prevState))
    setProducts((products) => [...products, product]);
  }, []);

  const result = useMemo(() => {
    console.log("Render loadingLargeData");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Product Management</h1>
      <AddProduct addNewProduct={addNewProduct} />
      <ProductList products={renderProducts} removeProduct={removeProduct} />
      <br />
      <SampleReactMemo txt="number 1, number 2, number 3,..." />
      <div>
        Demo calculate sum: {result}
      </div>
    </div>
  );
}

export default App;
