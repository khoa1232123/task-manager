import TaskItem from './TaskItem';

const TaskList = ({ tasks, setEditTask, setShow, fetchData }) => {
  console.log(Object.keys(tasks).length);

  return (
    <>
      {tasks && tasks.length !== 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            setEditTask={setEditTask}
            setShow={setShow}
            fetchData={fetchData}
          />
        ))
      ) : (
        <div className="no-task">You have no tasks</div>
      )}
    </>
  );
};

export default TaskList;
