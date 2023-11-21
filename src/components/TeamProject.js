import React from 'react';

function TeamProject({projectName, projectStatus, description, onClick}) {
  return (
    <div className="project" onClick={onClick}>
      <h3>{projectName}</h3>
      <p className="project-status"> {projectStatus}</p>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default TeamProject;