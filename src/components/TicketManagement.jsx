import React, { use, useState } from "react";
import Ticket from "./Ticket";
import TaskStatusList from "./TaskStatusList";
import ResolvedTask from "./ResolvedTask";

const TicketManagement = ({
  ticketPromise,
  taskQueue,
  setTaskQueue,
  resolvedTask,
  setResolvedTask,
}) => {
  // console.log(taskQueue, "ticket mgt");
  const ticketData = use(ticketPromise);
  const [allTickets, setAllTickets] = useState(ticketData || []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* ticket data */}
      <div className="col-span-6 lg:col-span-8 order-2 md:order-1">
        <h2 className="text-[#34485A] font-semibold text-2xl">
          Customer Ticket
        </h2>
        <div className="mt-5 grid lg:grid-cols-2 gap-4">
          {allTickets.map((ticket) => (
            <Ticket
              taskQueue={taskQueue}
              setTaskQueue={setTaskQueue}
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4 space-y-8 order-1 md:order-2">
        <div className="">
          <h2 className="text-[#34485A] font-semibold text-2xl mb-5">
            Task Status
          </h2>
          {taskQueue.length === 0 && (
            <p className="text-[#627382]">
              Select a ticket to add to Task Status.
            </p>
          )}
          <div className="space-y-3">
            {taskQueue.map((task) => (
              <TaskStatusList
                allTickets={allTickets}
                setAllTickets={setAllTickets}
                taskQueue={taskQueue}
                setTaskQueue={setTaskQueue}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </div>
        {/* resolved */}
        <div className="">
          <h2 className="text-[#34485A] font-semibold text-2xl mb-5">
            Resolved Task
          </h2>
          {resolvedTask.length === 0 && (
            <p className="text-[#627382]">No resolved tasks yet. </p>
          )}
          <div className="space-y-3">
            {resolvedTask.map((task) => (
              <ResolvedTask
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketManagement;
