import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Delete = ({ products }) => {
  const navigate = useNavigate();
  let { productID } = useParams();
  const product = products.find((p) => p.id === Number(productID));
  return (
    <Container>
      <h1>Confirm Delete Product</h1>
      <h3 className="confirm">
        Are you sure you want to delete the next product?
      </h3>
      <div className="product-details">
        <div className="tags">
          <span>ProductId: </span>
          <p>{product.id}</p>
        </div>
        <div className="tags">
          <span>Name: </span>
          <p>{product.title}</p>
        </div>
        <div className="tags">
          <span>ProductNumber: </span>
          <p>{product.id}</p>
        </div>
        <div className="tags">
          <span>Color: </span>
          <p>{product?.color || "unknown"}</p>
        </div>
        <div className="tags">
          <span>StandardCost: </span>
          <p>{product?.standardCost || "unknown"}</p>
        </div>
        <div className="tags">
          <span>ListPrice: </span>
          <p>{product?.price || "unknown"}</p>
        </div>
        <div className="tags">
          <span>Size: </span>
          <p>{product?.size || "unknown"} </p>
        </div>
        <div className="tags">
          <span>Weight: </span>
          <p>{product?.weight || "unknown"}</p>
        </div>
        <div className="tags">
          <span>ProductCategoryId: </span>
          <p>{product?.category}</p>
        </div>
        <div className="tags">
          <p>{product?.modelId || "unknown"}</p>
          <span>ProductModelId</span>
        </div>
        <div className="tags">
          <p>{product?.date || "unknown"}</p>
          <span>SellStartDate</span>
        </div>
        <div className="tags">
          <p>{product?.modifiedDate || "unknown"} </p>
          <span>ModifiedDate</span>
        </div>
      </div>
      <div className="form-btns">
        <Button type="submit" variant="danger" className="mx-1">
          Delete the Product!
        </Button>
        <Button
          type="button"
          onClick={() => navigate("/")}
          variant="primary"
          active
        >
          Cancel- Back to List
        </Button>
      </div>
    </Container>
  );
};

export default Delete;
