import CourseCard from '@/components/CourseCard';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const navigationProps = {
  brand: { logo: <FaUserAlt />, name: '', path: '/dashboard' },
  sections: [
    { name: 'Profile', path: '/profile' },
    { name: 'Sign Out', path: '/' },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Navigation
        brand={navigationProps.brand}
        sections={navigationProps.sections}
      />

      <div className="d-flex flex-column justify-content-center align-items-center align-content-center mt-3">
        <h3>Dashboard</h3>
        <Container>
          <Row className="justify-content-center">
            <CourseCard name="Class 1" imageSrc="/images/C++.jpg" />
            <CourseCard name="Class 2" imageSrc="/images/English.jpg" />
            <CourseCard name="Class 3" imageSrc="/images/Calculus.jpg" />
            <CourseCard name="Class 4" imageSrc="/images/E&M.jpg" />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
