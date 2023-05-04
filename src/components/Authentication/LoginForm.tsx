import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const submitForm = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      console.log('Username:', formData.get('username'));
      console.log('Password:', formData.get('password'));
    } else {
      console.log('gg');
    }
  };

  return (
    <div className="container w-50 mt-4">
      <Form ref={formRef} onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
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

export default LoginForm;