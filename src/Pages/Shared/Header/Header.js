import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/Fitness-Pro.png'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg='dark' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home">
                    <img width={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#inventory">Inventory</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user
                                ?
                                <>
                                    <Nav.Link as={Link} to="manageItems">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                </>
                                : ''
                        }
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        {
                            user
                                ?
                                <button
                                    className='btn btn-link text-decoration-none text-light'>
                                    Log Out
                                </button>
                                :
                                <Nav.Link as={Link} eventKey={2} to="login">
                                    Log In
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;