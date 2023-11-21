// Import necessary dependencies and components
import { AuthContext } from "./AuthContext";
import React, { useContext, useEffect, useState } from 'react';
//import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

// Navbar component
const AuthNavbar = () => {
    const { handleHome, logout, isAuthenticated, user } = useContext(AuthContext);
    const [showSignInButton, setShowSignInButton] = useState(false);
    const [displaySignIn, setDisplaySignIn] = useState(false);
    const { login, userValue } = useContext(AuthContext);

    // useEffect(() => {
    //     //console.log('User changed:', user);
    //     //setAuthenticated(!!user);
    //   }, [user]);

    const handleSignInClick = () => {
        setShowSignInButton(true);
        setDisplaySignIn(true);
      };

    const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
  
      if (!response) {
        //setError("Invalid credentials. Try again.");
        return;
      }
      setShowSignInButton(false);
      setDisplaySignIn(false);
      //refreshNavbar();
      // Display a pop-up message
    //window.alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      // Display an alert or handle the error as needed
      alert("An error occurred during login. Please try again.");
    }
    
  }

  return (
    <nav>
      <ul>
        <li onClick={handleHome}>Home</li>
        {isAuthenticated() ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li onClick={handleSignInClick}>Signin</li>
        )}
      </ul>
      {displaySignIn && (
        <SignIn onLogin={handleLogin} /> 
      )}
    </nav>
  );
};

export default AuthNavbar;
