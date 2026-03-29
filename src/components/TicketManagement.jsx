import React, { use } from "react";
import Ticket from "./Ticket";

const TicketManagement = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  //   console.log(ticketData);

  return (
    <section className="grid grid-cols-12 gap-6">
      {/* ticket data */}
      <div className="col-span-8">
        <h2 className="text-[#34485A] font-semibold text-2xl">
          Customer Ticket
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {ticketData.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
      <div className="col-span-4 space-y-4">
        <div className="">
          <h2 className="text-[#34485A] font-semibold text-2xl">Task Status</h2>
          <p>Select a ticket to add to Task Status.</p>
        </div>
        <div className="">
          <h2 className="text-[#34485A] font-semibold text-2xl">
            Resolved Task
          </h2>
          <p>No resolved tasks yet.</p>
        </div>
      </div>
    </section>
  );
};

export default TicketManagement;
