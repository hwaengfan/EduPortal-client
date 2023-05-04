import Campus from '@/assets/images/campus.jpg';
import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Head>
        <title>EduPortal</title>
      </Head>
      <NavBar />

      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <Image
              src={Campus}
              alt="Campus"
              className="rounded img-fluid mt-5 "
              priority
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
