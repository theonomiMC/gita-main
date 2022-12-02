import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ComingSoon from "./pages/ComingSoon";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import CreateNew from "./pages/CreateNew";
import Products from "./pages/Products";
import { data } from "./data";
import "./App.css";

function App() {
  const [products, setProducts] = useState(data);
  // const fetchProducts = async () => {
  //   try {
  //     let response = await fetch("https://dummyjson.com/products");
  //     let data = await response.json();
  //     // let st = localStorage.setItem("products", data.products);
  //     // setProducts(st);
  //     console.log(data.products);
  //     setProducts(data.products);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  const handleDelete = (id) => {
    let newData = products.filter((el) => el.id !== id);
    setProducts(newData);
  };
  const handleCreate = (product) => {
    let newData = [...products, { ...product }];
    setProducts(newData);
  };
  const handleUpdate = (newP) => {
    let updatedProducts = products.map((el) => {
      if (Number(newP.id) === Number(el.id)) {
        return { ...el, ...newP };
      }
      return el;
    });
    setProducts(updatedProducts);
  };
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
            <Route
              path=":productID"
              element={<Edit products={products} handleUpdate={handleUpdate} />}
            />
          </Route>
          <Route path="delete">
            <Route
              path=":productID"
              element={
                <Delete products={products} handleDelete={handleDelete} />
              }
            />
          </Route>
          <Route
            path="create-new-product"
            element={<CreateNew handleCreate={handleCreate} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
