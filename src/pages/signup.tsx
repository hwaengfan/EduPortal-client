import SignupForm from '@/components/Authentication/SignupForm';
import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <NavBar />

      <Container fluid style={{ height: '75vh' }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={9} lg={9}>
            <SignupForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
