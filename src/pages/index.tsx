import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const typingSequence = [
  'Transform your education',
  1000,
  'Unlock your potential',
  1000,
  'Elevate your learning',
  1000,
];

const navigationProps = {
  brand: { logo: <FaGraduationCap />, name: 'EduPortal', path: '/' },
  sections: [
    { name: 'Log In', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
  ],
};

const Home = () => {
  return (
    <>
      <Head>
        <title>EduPortal</title>
      </Head>
      <Navigation
        brand={navigationProps.brand}
        sections={navigationProps.sections}
      />

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
              <Button variant="primary" href="/login">
                Log In
              </Button>{' '}
              <Button variant="primary" href="/signup">
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
