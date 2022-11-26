import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    // <Navbar
    //   bg="light"
    //   variant="light"
    //   className="shadow p-3 mb-5 bg-white rounded"
    // >
    //   <Container>
    //     <Navbar.Brand>
    //       Online Shop Admin
    //       <span className="divider"></span>
    //     </Navbar.Brand>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarTogglerDemo01"
    //       aria-controls="navbarTogglerDemo01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <Nav
    //       className="me-auto collapse navbar-collapse"
    //       id="navbarTogglerDemo01"
    //     >
    //       <Nav.Link as={Link} to="/">
    //         Products
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/customers">
    //         Customers
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/orders">
    //         Orders
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/reports">
    //         Reports
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <Navbar bg="light" expand="md" className="shadow p-3 mb-5 bg-white rounded">
      <Container>
        <Navbar.Brand href="#">
          Online Shop Admin
          <span className="divider"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/customers">
              Customers
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/reports">
              Reports
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
