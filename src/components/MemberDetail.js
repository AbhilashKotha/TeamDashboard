import React from 'react'

function MemberDetail({member}) {
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