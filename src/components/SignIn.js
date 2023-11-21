import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';

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
    <Form className="signin-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text"
          name="username"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password"
          name="password"
          onChange={handleInputChange}
        />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default SignIn;
