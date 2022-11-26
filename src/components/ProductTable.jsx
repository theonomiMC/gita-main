import React from "react";
import Table from "react-bootstrap/Table";
import Actions from "./Actions";

const ProductTable = ({ products }) => {
  return (
    <div className="table-wrapper">
      <Table size="sm" striped bordered hover>
        <thead className="align-middle">
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Color</th>
            <th>List Price</th>
            <th>Modified Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.id}</td>
              <td>color</td>
              <td>{p?.price}</td>
              <td>Modified Date</td>
              <td>
                <Actions p={p} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
