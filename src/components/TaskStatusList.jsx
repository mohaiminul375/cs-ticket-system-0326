  import { ToastContainer, toast } from 'react-toastify';

const TaskStatusList = ({
  task,
  resolvedTask,
  setResolvedTask,
  taskQueue,
  setTaskQueue,
  allTickets,
  setAllTickets,
}) => {
  const addToResolve = (taskData) => {
    console.log(taskData);
    setResolvedTask([...resolvedTask, taskData]);
    const filterStatusTask = taskQueue.filter(
      (task) => task.id !== taskData.id,
    );
    const filterAllTicket = allTickets.filter(
      (task) => task.id !== taskData.id,
    );
    setTaskQueue(filterStatusTask);
    setAllTickets(filterAllTicket);
    toast.success('Task has been resolved')
  };
  return (
    <div className="bg-white p-4 space-y-2">
      <h3 className="text-xl font-semibold">{task?.title}</h3>
      <h6>#{task.id}</h6>
      <button
        onClick={() => addToResolve(task)}
        className="btn bg-[#02A53B] w-full text-white"
      >
        Complete
      </button>
        {/* <ToastContainer /> */}
    </div>
  );
};

export default TaskStatusList;
