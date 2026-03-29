import React, { use } from "react";
import Ticket from "./Ticket";

const TicketManagement = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  //   console.log(ticketData);

  return (
    <section className="grid grid-cols-12 gap-4">
      {/* ticket data */}
      <div className="col-span-8">
        <h1 className="text-[#34485A] font-semibold text-2xl">
          Customer Ticket
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-4">
          {ticketData.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
      <div className="col-span-4"></div>
    </section>
  );
};

export default TicketManagement;
