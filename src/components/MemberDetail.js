import React, { useContext } from 'react'
//import { AuthContext } from './AuthPage'

function MemberDetail({member}) {
    //const { handleLogout } = useContext(AuthContext);
    //console.log(AuthContext);
    
  return (
    <div className="member-detail">
      <h2>{member.name}</h2>
      <p className="role">{member.role}</p> 
      <p className="bio">{member.bio}</p>
      <p className="larger-bio">{member.largerBio}</p>
      <p className="additional-info">{member.additionalInfo}</p>
    </div>

  );
}

export default MemberDetail;