// ParentComponent.js
import React, { useState } from 'react';
import App from '../App';

const ParentComponent = () => {
  const [navbarKey, setNavbarKey] = useState(0);

  const refreshNavbar = () => {
    setNavbarKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <App key={navbarKey} refreshNavbar={refreshNavbar} />
    </div>
  );
};

export default ParentComponent;
