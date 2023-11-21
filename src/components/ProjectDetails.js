import React, { useContext } from 'react'
//import { AuthContext } from './AuthPage'

function ProjectDetail({project}) {
    //const { handleLogout } = useContext(AuthContext);
    //console.log(AuthContext);
    
  return (
    <div className="project-detail">
      <h2>{project.projectName}</h2>
      <p className="project-status">{project.projectStatus}</p> 
      <p className="project-description">{project.description}</p>
      <p className="project-progress">{project.progressStatus}</p>
      <p className="project-goals">{project.projectGoals}</p>
    </div>

  );
}

export default ProjectDetail;