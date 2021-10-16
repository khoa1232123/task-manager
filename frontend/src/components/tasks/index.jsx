import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import TaskList from './TaskList';
import TaskModal from './TaskModal';

const Tasks = () => {
  const [show, setShow] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({});

  async function fetchData() {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  }

  console.log(tasks);

  useEffect(() => {
    fetchData();
  }, []);

  const handleShow = () => {
    setEditTask({});
    setShow(true);
  };
  return (
    <>
      <Row>
        <Col sm="3"></Col>
        <Col>
          <Card className="mt-5 mb-5">
            <Card.Body className="card-control">
              <h2 className="title-task">Task Manager</h2>
              <Button variant="primary" onClick={handleShow}>
                Create
              </Button>
            </Card.Body>
          </Card>
          <TaskList
            tasks={tasks}
            setShow={setShow}
            setEditTask={setEditTask}
            fetchData={fetchData}
          />
        </Col>
        <Col sm="3"></Col>
      </Row>
      <TaskModal
        show={show}
        setShow={setShow}
        fetchData={fetchData}
        editTask={editTask}
      />
    </>
  );
};

export default Tasks;
