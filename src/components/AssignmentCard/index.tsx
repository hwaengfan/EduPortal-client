import { Card } from 'react-bootstrap';

interface AssignmentCardProps {
  name?: string;
  grade?: string;
  dueDate?: string;
  description?: string;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({
  name,
  grade,
  dueDate,
  description,
}) => {
  return (
    <>
      <Card
        border="dark"
        bg="light"
        text="dark"
        style={{ width: '18rem' }}
        className="mx-3 my-3">
        <Card.Header>Due Date</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>Description</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Grade</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default AssignmentCard;
