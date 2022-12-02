import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";

const CreateNew = ({ handleCreate }) => {
  const navigate = useNavigate();
  const [nameErr, setNameErr] = useState("The Name field is required.");
  const [numErr, setNumErr] = useState("The productNumber field is required.");
  const [priceErr, setPriceErr] = useState(
    "The List price should be between 0.1 and 10000."
  );
  const [state, setState] = useState({
    title: "",
    id: Number(Date.now()),
    color: "",
    cost: "",
    price: "",
    size: "",
    weight: "",
    startDate: new Date(Date.now()),
  });
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    if (state.title && state.id && state.price >= 0.1 && state.price <= 10000) {
      let newProduct = Object.fromEntries(data.entries());
      handleCreate({ ...newProduct });
      navigate("/");
    } else {
      console.log("wrong");
    }
  };
  // chang input fields
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // Track field changes to set errors
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
      <h1>Create a new Product</h1>

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
          required
          error={numErr}
          placeholder="Product number .."
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
          name="price"
          min="0.1"
          max="10000"
          step="any"
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
        <div className="form-btns">
          <Button type="submit" variant="success" size="sm">
            Save
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/")}
            variant="secondary"
            size="sm"
            className="mx-1"
          >
            Back to list
          </Button>
          <Button type="button" variant="danger" size="sm">
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateNew;
