import LoginForm from '@/components/Authentication/LoginForm';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const navigationProps = {
  brand: { logo: <FaGraduationCap />, name: 'EduPortal', path: '/' },
  sections: [
    { name: 'Log In', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
  ],
};

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navigation
        brand={navigationProps.brand}
        sections={navigationProps.sections}
      />

      <Container fluid style={{ height: '75vh' }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={9} lg={9}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
