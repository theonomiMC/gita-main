import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Input } from "../components/Input";

const Edit = ({ products }) => {
  const navigate = useNavigate();
  let { productID } = useParams();
  const product = products.find((p) => p.id === Number(productID));

  const [nameErr, setNameErr] = useState("The Name field is required.");
  const [numErr, setNumErr] = useState("The productNumber field is required.");
  const [priceErr, setPriceErr] = useState(
    "The List price should be between 0.1 and 10000."
  );
  const [state, setState] = useState({
    name: product?.title || "",
    productNumber: product?.id || "",
    color: product?.color || "",
    cost: product?.cost || "",
    price: product?.price || "",
    size: product?.size || "",
    weight: product?.weight || "",
    startDate: product?.date || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let data = new FormData(e.target);
      if (
        state.name &&
        state.productNumber &&
        state.price >= 0.1 &&
        state.price <= 1000
      ) {
        let editedProduct = Object.fromEntries(data.entries());
        console.log(editedProduct);

        // fetch(`https://dummyjson.com/products/${state.productNumber}`, {
        //   method: "PUT",
        //   body: JSON.stringify(editedProduct),
        //   headers: { "Content-type": "application/json; charset=UTF-8" },
        // });
      } else {
        console.log("wrong inputs");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (state.name) {
      setNameErr();
    } else {
      setNameErr("The Name field is required.");
    }
    if (state.productNumber) {
      setNumErr("");
    } else {
      setNumErr("The productNumber field is required.");
    }
    if (state.price >= 0.1 && state.price < 10000) {
      setPriceErr("");
    } else {
      setPriceErr("The List price should be between 0.1 and 10000.");
    }
  }, [state.name, state.productNumber, state.price]);

  return (
    <Container>
      <h1>Edit Product</h1>
      {product ? (
        <form className="form" onSubmit={handleSubmit}>
          {/* Name field */}
          <Input
            id="name"
            type="text"
            value={state.name}
            onChange={onChange}
            name="name"
            error={nameErr}
            placeholder="Product name .."
            required
          >
            Name:
          </Input>

          {/* Product Number field */}
          <Input
            id="number"
            type="number"
            value={state.productNumber}
            onChange={onChange}
            name="productNumber"
            error={numErr}
            placeholder="Product number .."
            required
          >
            Product Number:
          </Input>

          {/* Color field */}
          <Input
            id="color"
            type="text"
            value={state.color}
            name="color"
            onChange={onChange}
            placeholder="color .."
          >
            Color:
          </Input>
          {/* Standard Cost field */}
          <Input
            id="cost"
            type="number"
            value={state.cost}
            onChange={onChange}
            name="cost"
            placeholder="Standard Cost .."
          >
            Standard Cost:
          </Input>
          {/* List Price field */}
          <Input
            id="price"
            type="number"
            value={state.price}
            onChange={onChange}
            min="0.1"
            max="10000"
            step="any"
            name="price"
            error={priceErr}
            required
            placeholder="List Price .."
          >
            List Price:
          </Input>
          {/* Size field */}
          <Input
            id="size"
            type="number"
            value={state.size}
            onChange={onChange}
            name="size"
            placeholder=" Size .."
          >
            Size:
          </Input>
          {/* Weight field */}
          <Input
            id="weight"
            type="number"
            value={state.weight}
            onChange={onChange}
            name="weight"
            placeholder=" Weight .."
          >
            Weight:
          </Input>
          {/* Sell Start Date field */}
          <Input
            id="startDate"
            type="date"
            value={state.startDate}
            onChange={onChange}
            name="startDate"
            placeholder=" Sell Start Date .."
          >
            Sell Start Date:
          </Input>
          <div className="form-btns right">
            <Button type="submit" variant="success" size="sm">
              Save
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mx-1"
              onClick={() => navigate("/")}
            >
              Back to list
            </Button>
            <Button
              type="button"
              onClick={() => navigate(`/delete/${product.id}`)}
              variant="danger"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </form>
      ) : (
        "No such product"
      )}
    </Container>
  );
};

export default Edit;
