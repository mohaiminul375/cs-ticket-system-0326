const TaskStatusList = ({ task }) => {
  return (
    <div className="bg-white p-4 space-y-2">
      <h3 className="text-xl font-semibold">{task?.title}</h3>
      <h6>#${task.id}</h6>
      <button className="btn bg-green-700 w-full text-white">Complete</button>
    </div>
  );
};

export default TaskStatusList;
