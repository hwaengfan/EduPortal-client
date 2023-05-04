import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="container w-50 mt-4">
      <Form>
        <Form.Group className="mb-3" controlId="formFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formShowpass">
          <Form.Check
            type="checkbox"
            label="Show Password"
            onClick={togglePasswordVisibility}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
