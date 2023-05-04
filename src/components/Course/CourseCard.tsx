import React from 'react';
import { Card } from 'react-bootstrap';

interface CourseCardProps {
  courseName: string;
  imageSrc: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseName, imageSrc }) => {
  return (
    <Card className="mx-3 my-3 border-dark" style={{ width: '15rem' }}>
      <Card.Img variant="top" src={imageSrc} style={{ height: '100%' }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          {courseName}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
