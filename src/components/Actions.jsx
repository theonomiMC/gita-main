import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Actions = ({ p }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate(`/edit/${p.id}`)}
        variant="secondary"
        size="sm"
        active
        className="m-2"
      >
        Edit
      </Button>{" "}
      <Button
        onClick={() => navigate(`/delete/${p.id}`)}
        variant="danger"
        size="sm"
        active
      >
        Delete
      </Button>
    </>
  );
};

export default Actions;
