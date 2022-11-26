import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [pricefrom, setPriceform] = useState(0);
  const [priceto, setPriceto] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = (e) => {
    e.preventDefault();
    // first filter by name (if exists) or return original data
    let filteredByName = name
      ? products.filter((el) =>
          el.title.toLowerCase().includes(name.toLowerCase())
        )
      : products;
    // then filter by price (if exists) or return filtered by name data
    let filteredByprice =
      pricefrom > 0 && priceto > 0
        ? filteredByName.filter(
            (el) => el.price >= pricefrom && el.price < priceto
          )
        : filteredByName;

    setFilteredProducts(filteredByprice);
  };

  return (
    <Container>
      <div className="title-wrapper">
        <h1>Products</h1>
        <Button variant="outline-secondary" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Filter
        </Button>
      </div>
      {show && (
        <form className="filter" onSubmit={handleFilter}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="pricefrom">and Price between:</label>
          <input
            id="pricefrom"
            type="number"
            min={0}
            className="form-control w-30"
            value={pricefrom}
            onChange={(e) => setPriceform(e.target.value)}
          />

          <label htmlFor="priceto">and:</label>
          <input
            id="priceto"
            type="number"
            min={0}
            className="form-control w-30"
            value={priceto}
            onChange={(e) => setPriceto(e.target.value)}
          />

          <Button variant="outline-secondary" type="submit">
            Apply
          </Button>
        </form>
        // </div>
      )}
      {filteredProducts && <ProductTable products={filteredProducts} />}
      <Button
        className="mt-3 mb-5"
        variant="primary"
        active
        onClick={() => navigate("/create-new-product")}
      >
        Create New Product
      </Button>
    </Container>
  );
};

export default Products;
