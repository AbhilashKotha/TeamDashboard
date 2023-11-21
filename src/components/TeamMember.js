import React from 'react';

function TeamMember({name, role, bio, onClick}) {
  return (
    <div className="team-member" onClick={onClick}>
     <h3>{name}</h3>
     <p className="role">{role}</p>
     <p className="bio">{bio}</p> 
    </div>
  );
}

export default TeamMember;