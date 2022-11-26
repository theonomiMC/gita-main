import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ComingSoon from "./pages/ComingSoon";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import CreateNew from "./pages/CreateNew";
import Products from "./pages/Products";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Products products={products} />} />
          <Route path="customers" element={<ComingSoon name={"customers"} />} />
          <Route path="orders" element={<ComingSoon name={"orders"} />} />
          <Route path="reports" element={<ComingSoon name={"reports"} />} />
          <Route path="edit">
            <Route path=":productID" element={<Edit products={products} />} />
          </Route>
          <Route path="delete">
            <Route path=":productID" element={<Delete products={products} />} />
          </Route>
        </Route>

        <Route path="create-new-product" element={<CreateNew />} />
      </Routes>
    </Router>
  );
}

export default App;
