import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const submitForm = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      console.log('First name:', formData.get('firstName'));
      console.log('Last name:', formData.get('lastName'));
      console.log('Username:', formData.get('username'));
      console.log('Password:', formData.get('password'));
    } else {
      console.log('error');
    }
  };

  return (
    <div className="container w-50 mt-4">
      <Form ref={formRef} onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter first name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter last name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
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
