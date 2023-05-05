import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const ProfileForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () =>
    setShowCurrentPassword(!showCurrentPassword);

  const toggleNewPasswordVisibility = () =>
    setShowNewPassword(!showNewPassword);

  const submitForm = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      console.log('First name:', formData.get('firstName'));
      console.log('Last name:', formData.get('lastName'));
      console.log('Username:', formData.get('username'));
      console.log('Current Password:', formData.get('currentPassword'));
      console.log('New Password:', formData.get('newPassword'));
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <Form ref={formRef} onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            maxLength={50}
            placeholder="Hoang"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            maxLength={50}
            placeholder="Phan"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            maxLength={50}
            placeholder="student123"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              name="currentPassword"
              type={showCurrentPassword ? 'text' : 'password'}
              maxLength={50}
              placeholder="current password"
              required
            />
            <Button
              variant="secondary"
              onClick={toggleCurrentPasswordVisibility}>
              {showCurrentPassword ? 'Hide' : 'Show'}
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              name="newPassword"
              type={showNewPassword ? 'text' : 'password'}
              maxLength={50}
              placeholder="new password"
            />
            <Button variant="secondary" onClick={toggleNewPasswordVisibility}>
              {showNewPassword ? 'Hide' : 'Show'}
            </Button>
          </InputGroup>
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Save changes
        </Button>
      </Form>
    </>
  );
};

export default ProfileForm;
