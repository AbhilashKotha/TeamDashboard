import { AuthContext } from "./AuthContext";
import { NavLink } from "react-router-dom";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./icons";
import React, { useContext, useEffect, useState } from 'react';

const Navbar = (props) => {
    const {handleHome, logout, isAuthenticated } = useContext(AuthContext);

    const handleSignInClick = () => {
      if (props.onSignin) {
        props.onSignin();
      }
      localStorage.setItem('signinclick', true);
      };
    
    const [click, setClick] = useState(false);
    const handleClick = () => { 
      setClick(!click);
    }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/"  onClick={handleHome} className="nav-logo">
            <span>Team Dashboard</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {!isAuthenticated() ? (<li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleSignInClick}
              >
                Sign-in
              </NavLink>
            </li>) : (
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={logout}
              >
                Sign Out
              </NavLink>
            </li>)}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {!click ? (
              <span className="icon">
                <HamburgerMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgerMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
