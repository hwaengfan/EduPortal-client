import { Card } from 'react-bootstrap';

interface CourseCardProps {
  name: string;
  imageSrc: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, imageSrc }) => {
  return (
    <Card border="dark" className="mx-3 my-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          {name}
        </Card.Title>
        <Card.Img variant="top" src={imageSrc} />
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
