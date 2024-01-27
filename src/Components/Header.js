import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><h2 className='text-success'>Furniture</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0 "
           >
            <Nav.Link  className="text-success fw-bold"href="/">Home</Nav.Link>
            <Nav.Link className="text-success fw-bold" href="/about">About</Nav.Link>
            <Nav.Link className="text-success fw-bold" href="/product">Product</Nav.Link>
            <Nav.Link className="text-success fw-bold" href="/review">Review</Nav.Link>
            <Nav.Link className="text-success fw-bold" href="/contact">Contact</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header