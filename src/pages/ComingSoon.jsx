import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Image from "./soon.png";

const ComingSoon = ({ name }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="page-title">{name} Page</h1>
      <img src={Image} alt="Coming soon" className="page-img" />
      <Button onClick={() => navigate("/")} variant="link" className="mx-5">
        Back To Products
      </Button>
    </Container>
  );
};

export default ComingSoon;
