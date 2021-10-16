import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const TaskItem = ({ task, setShow, setEditTask, fetchData }) => {
  const { _id, title, content } = task;

  const handleEdit = () => {
    setShow(true);
    setEditTask(task);
  };

  const handleDelete = async () => {
    await axios.delete('http://localhost:5000/api/tasks/' + _id);
    fetchData();
  };

  return (
    <Card className="mb-2">
      <Card.Body className="card-item card-control">
        <div className="text">
          <h4>{title}</h4>
          <div className="content">{content}</div>
        </div>
        <div className="actions">
          <Button variant="warning" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
