import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const typingSequence = [
  'Transform your education',
  1000,
  'Unlock your potential',
  1000,
  'Elevate your learning',
  1000,
];

const Home = () => {
  return (
    <>
      <Head>
        <title>EduPortal</title>
      </Head>
      <NavBar />

      <Container>
        <Row className="justify-content-center"></Row>
      </Container>

      <Container fluid style={{ height: '75vh' }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={9} lg={9} className="text-center">
            <h1>Welcome to EduPortal</h1>
            <div className="lead">
              <TypeAnimation
                sequence={typingSequence}
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="mt-3">
              <Button variant="primary" href="/signup">
                Sign Up
              </Button>{' '}
              <Button variant="primary" href="/login">
                Log In
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
