import React, {useState} from "react";
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const SignIn = ({ onLogin }) => {

  const [credentials, setCredentials] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
