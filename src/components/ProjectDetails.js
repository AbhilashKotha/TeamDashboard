import React, { useContext } from 'react'
//import { AuthContext } from './AuthPage'

function ProjectDetail({project}) {
    //const { handleLogout } = useContext(AuthContext);
    //console.log(AuthContext);
    
  return (
    <div className="project-detail">
      <h2>{project.projectName}</h2>
      <p className="project-status"><b>Status: </b> {project.projectStatus}</p> 
      <p className="project-description"><b>Description: </b>{project.description}</p>
      <p className="project-progress"><b>current: </b>{project.progressStatus}</p>
      <p className="project-goals"><b>Goals: </b>{project.projectGoals}</p>
    </div>

  );
}

export default ProjectDetail;