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
import Modal from 'react-bootstrap/Modal';
import TeamProject from "./components/TeamProject";
import ProjectDetail from "./components/ProjectDetails";
import PeopleIssuesChart from "./components/PeopleIssuesChart";
import ProgressChart from "./components/ProgressChart";
import IssuesChart from "./components/IssuesChart";

const App = ({refreshNavbar}) => {
  
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { login, user } = useContext(AuthContext);
  const [navsigninClick, setNavSigninClick] = useState(false);
  const handleClose = () => {
    setNavSigninClick(false);
    setShowSignInButton(false);
  }

  const handleTeamMemberClick = (member) => {
    setSelectedMember(member);
    setSelectedProject(null);
    if (!user) {
      setShowSignInButton(true);
      setIsAuthenticated(false);
      return
    }
    setShowSignInButton(false);
    setIsAuthenticated(true);
  };

  const handleTeamProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedMember(null);
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
      setIsAuthenticated(true);
      setShowSignInButton(false);
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
        <h1 >Projects in progress</h1>
        <br></br>
        <Row>
          <div className="project-list">
          {teamData.projects.map(project => (
            <Col>
              <TeamProject
                key={project.projectName}
                projectName={project.projectName}
                projectStatus={project.projectStatus}
                description={project.description}
                onClick={() => handleTeamProjectClick(project)}
              />
            </Col>
          ))} 
        </div>
        </Row>
        <Row>
          <Col>
            {user && selectedProject && <ProjectDetail project={selectedProject} />}
          </Col>
        </Row>
        <br></br>
        <h1 >Metrics</h1>
        <br></br>
        {user && (
        <Row>
          <Col>
            <IssuesChart />
          </Col>
          <Col>
            <ProgressChart />  
          </Col>
          <Col>
            <PeopleIssuesChart />
          </Col>
        </Row>
        )}
        <br></br>
        <h1 >Discussion Forum</h1>
        <br></br>
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
