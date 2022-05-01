import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/Fitness Pro.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home">
                    <img width={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inventory">Inventory</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="manageItems">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                        <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="login">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;