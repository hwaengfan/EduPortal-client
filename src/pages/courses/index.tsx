import AssignmentCard from '@/components/AssignmentCard';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const navigationProps = {
  brand: { logo: <FaUserAlt />, name: '', path: '/dashboard' },
  sections: [],
};

const Courses = () => {
  return (
    <>
      <Head>
        <title>Course Name</title>
      </Head>

      <Navigation
        brand={navigationProps.brand}
        sections={navigationProps.sections}
      />

      <div className="d-flex flex-column justify-content-center align-items-center align-content-center mt-3">
        <h3>Course Name</h3>
        <Container>
          <Row className="justify-content-center">
            <AssignmentCard />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Courses;
