import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TaskModal = ({ show, setShow, fetchData, editTask }) => {
  const [getTask, setGetTask] = useState({ title: '', content: '' });
  const handleClose = () => {
    setGetTask({});
    setShow(false);
  };

  useEffect(() => {
    setGetTask(editTask);
  }, [editTask]);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setGetTask({ ...getTask, [name]: value });
    console.log(getTask);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(getTask);
    if (editTask && editTask._id) {
      await axios.put(
        'http://localhost:5000/api/tasks/' + editTask._id,
        getTask
      );
    } else {
      await axios.post('http://localhost:5000/api/tasks', getTask);
    }
    fetchData();
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>
            {editTask && editTask._id ? 'Edit task' : 'Create task'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={getTask.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Content"
              value={getTask.content}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant={editTask && editTask._id ? 'warning' : 'primary'}
            type="submit"
            onClick={handleSubmit}
          >
            {editTask && editTask._id ? 'Edit' : 'Create'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskModal;
