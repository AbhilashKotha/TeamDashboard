import TeamMember from "./components/TeamMember";
import MemberDetail from "./components/MemberDetail";
import Navbar from "./components/Navbar";
import DiscussionForum from "./components/DiscussionForum";
import SignIn from "./components/SignIn";
import {AuthProvider, AuthContext} from "./components/AuthContext";
import React, { useState, useContext } from "react";
import { BrowserRouter} from "react-router-dom";
import teamData from "./team.json"
import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const App = ({refreshNavbar}) => {
  
  const [selectedMember, setSelectedMember] = useState(null);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login, user } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  const [navbarKey, setNavbarKey] = useState(0);
  const [navsigninClick, setNavSigninClick] = useState(false);
  const handleClose = () => {
    setNavSigninClick(false);
    setShowSignInButton(false);
  }

  const handleTeamMemberClick = (member) => {
    setSelectedMember(member);
    if (!user) {
      setShowSignInButton(true);
      setIsAuthenticated(false);
      return
    }
    setShowSignInButton(false);
    setIsAuthenticated(true);
  };
  
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
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
    
  }
  const signinClicked = () => { 
    setNavSigninClick(!navsigninClick)
  }
  return (
    <BrowserRouter>
    <AuthProvider>
    <div>
      <Navbar onSignin= {signinClicked}/>
      <Container fluid>
        <h1 >Meet our team</h1>
        <br></br>
        <Row>
          <div className="team-list">
            {teamData.members.map((member, index) => (
              <Col>
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  onClick={() => handleTeamMemberClick(member)}
                />
              </Col>
            ))}
          </div>
        </Row>
        <Row>
          <Col>
            <br></br>
            {isAuthenticated && selectedMember  && <MemberDetail member={selectedMember} />}
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            {user && <DiscussionForum /> }
          </Col>
        </Row>
      </Container>
      <Modal
        show={((showSignInButton && !isAuthenticated) ||navsigninClick )}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn onLogin={handleLogin} /> 
        </Modal.Body>
        <Modal.Footer>
          <p>Username: user1</p>
          <p>Password: password1</p>
        </Modal.Footer>
      </Modal>
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
