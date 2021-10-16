const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require('../controllers/tasks');

const router = require('express').Router();

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').put(updateTask).get(getTask).delete(deleteTask);

module.exports = router;
