import LoginForm from '@/components/Authentication/LoginForm';
import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <NavBar />

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
