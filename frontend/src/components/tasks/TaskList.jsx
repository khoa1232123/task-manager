import TaskItem from './TaskItem';

const TaskList = ({ tasks, setEditTask, setShow, fetchData }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          setEditTask={setEditTask}
          setShow={setShow}
          fetchData={fetchData}
        />
      ))}
    </>
  );
};

export default TaskList;
