import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import './Layout.style.css'

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <div className='disp-f'>
                        <img width={80} src="ALV.png" alt="Algorithm Visualizer Logo" />
                        <div className="brand-text">Algorithm View</div>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Outlet />
            </Container>

            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>&copy; 2024 Han Sang Gyeol. All rights reserved.</p>
                    <div className='footer-icon-box'>
                        <a href="https://www.instagram.com" className="text-white mx-3" >
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/sanggyeol1" className="text-white mx-3" >
                            <FaGithub />
                        </a>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Layout;
