import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Input } from "../components/Input";

const Edit = ({ products, handleUpdate }) => {
  const navigate = useNavigate();
  let { productID } = useParams();
  const product = products.find((p) => Number(p.id) === Number(productID));
  const [nameErr, setNameErr] = useState("The Name field is required.");
  const [numErr, setNumErr] = useState("The productNumber field is required.");
  const [priceErr, setPriceErr] = useState(
    "The List price should be between 0.1 and 10000."
  );
  const [state, setState] = useState({
    title: product?.title || "",
    id: product?.id || "",
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
        state.title &&
        state.id &&
        state.price >= 0.1 &&
        state.price <= 1000
      ) {
        let obj = Object.fromEntries(data.entries());
        let editedProduct = {
          ...product,
          ...obj,
          id: Number(obj.id),
          modified_date: new Date(Date.now()).toLocaleDateString(),
        };
        handleUpdate(editedProduct);
        navigate("/");
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
    if (state.title) {
      setNameErr();
    } else {
      setNameErr("The Name field is required.");
    }
    if (state.id) {
      setNumErr("");
    } else {
      setNumErr("The productNumber field is required.");
    }
    if (state.price >= 0.1 && state.price < 10000) {
      setPriceErr("");
    } else {
      setPriceErr("The List price should be between 0.1 and 10000.");
    }
  }, [state.title, state.id, state.price]);

  return (
    <Container>
      <h1>Edit Product</h1>
      {product ? (
        <form className="form" onSubmit={handleSubmit}>
          {/* Name field */}
          <Input
            id="name"
            type="text"
            value={state.title}
            onChange={onChange}
            name="title"
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
            value={state.id}
            onChange={onChange}
            name="id"
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
