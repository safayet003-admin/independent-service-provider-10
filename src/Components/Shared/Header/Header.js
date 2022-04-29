import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth).then(() => {

        })
    }
    return (
        <div>
            <nav>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><span className='text-primary'>Dr. Kaneez Fatema</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/about">About me</Nav.Link>
                                {
                                    user
                                        ?
                                        <Nav.Link as={Link} to="/login" onClick={handelSignOut}>
                                            SignOut


                                        </Nav.Link>
                                        :
                                        <Nav.Link as={Link} to="/login">
                                            Login
                                        </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;