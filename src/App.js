import TeamMember from "./components/TeamMember";
import MemberDetail from "./components/MemberDetail";
import Navbar from "./components/AuthNavbar";
import SignIn from "./components/SignIn";
import {AuthProvider, AuthContext} from "./components/AuthContext";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import teamData from "./team.json"
import "./App.css";

const App = ({ refreshNavbar }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login, user } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  const [navbarKey, setNavbarKey] = useState(0);

  const handleTeamMemberClick = (member) => {
    setSelectedMember(member);
    console.log("in handle team member "+user);
    //console.log("handle team member1 "+ isAuthenticated);
    if (!user) {
      setShowSignInButton(true);
      setIsAuthenticated(false);
      return
    }
    setShowSignInButton(false);
    setIsAuthenticated(true);
  };

  // const handleSignInSubmit = (e) => {
  //   e.preventDefault();
  //   // Simulate authentication logic (replace with actual authentication logic)
  //   if (
  //     credentials.username === "yourUsername" &&
  //     credentials.password === "yourPassword"
  //   ) {
  //     setIsAuthenticated(true);
  //     setShowSignInButton(false);
  //   } else {
  //     alert("Invalid credentials. Try again.");
  //   }
  // };

  // const handleCredentialsChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };
  
  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
  
      if (!response) {
        setError("Invalid credentials. Try again.");
        return;
      }
      setIsAuthenticated(true);
      setShowSignInButton(false);
      setSuccess("Login successful!");
      refreshNavbar();
      // Display a pop-up message
    //window.alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      // Display an alert or handle the error as needed
      alert("An error occurred during login. Please try again.");
    }
    
  }

  

  return (
    <AuthProvider>
    <div>
      <Navbar/>
      <div className="team-list">
        {teamData.members.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            onClick={() => handleTeamMemberClick(member)}
          />
        ))}
        {showSignInButton && !isAuthenticated && (
          <SignIn onLogin={handleLogin} /> 
        )}
      </div>
      {isAuthenticated && <MemberDetail member={selectedMember} />}
    </div>
    </AuthProvider>
  );
};

export default App;
