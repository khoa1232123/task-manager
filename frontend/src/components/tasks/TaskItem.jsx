import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const TaskItem = ({ task, setShow, setEditTask, fetchData }) => {
  const { _id, title, content, finish } = task;

  const [getFinish, setGetFinish] = useState(false);

  useEffect(() => {
    setGetFinish(finish);
  }, [finish]);
  console.log({ finish, getFinish });

  const handleFinish = async () => {
    await axios.put('http://localhost:5000/api/tasks/' + _id, {
      ...task,
      finish: !getFinish,
    });
    setGetFinish(!getFinish);
  };

  const handleEdit = () => {
    setShow(true);
    setEditTask(task);
  };

  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    const del = confirm('Are you sure?');
    if (del) {
      await axios.delete('http://localhost:5000/api/tasks/' + _id);
      fetchData();
    }
  };

  return (
    <Card className="mb-2">
      <Card.Body className="card-item card-control">
        <div className="text">
          <h4
            onClick={handleFinish}
            className={getFinish ? 'finish' : 'no-finish'}
          >
            {title}
          </h4>
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
