import { AuthContext } from "./AuthContext";
import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = (props) => {
    const {handleHome, logout, isAuthenticated } = useContext(AuthContext);

    const handleSignInClick = () => {
      if (props.onSignin) {
        props.onSignin();
      }
      localStorage.setItem('signinclick', true);
      };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Team Dashboard</Navbar.Brand>
      
      
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          {isAuthenticated() ? (<>
            <Nav.Link href="#members">Members</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#metrics">Metrics</Nav.Link>
            <Nav.Link href="#discussion">Discussions</Nav.Link>
            <Nav.Link onClick={logout}>Sign Out</Nav.Link>
            </>
          ) : (  
            <Nav.Link onClick={handleSignInClick}>Sign In</Nav.Link>
          )}
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarComponent;
