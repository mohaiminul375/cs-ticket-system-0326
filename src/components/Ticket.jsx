const Ticket = ({ ticket }) => {
  const { id, title, status, description, priority, customer, createdAt } =
    ticket;
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <div className="p-5 bg-white rounded-md space-y-2 shadow-lg flex flex-col cursor-pointer">
      <div className="flex justify-between">
        <h5 className="text-black font-semibold">{title}</h5>
        <h5
          className={`p-2 rounded-full text-xs ${status === "Open" && "bg-[#B9F8CF] text-[#0B5E06]"} ${status === "In Progress" && "bg-[#F8F3B9] text-[#9C7700]"}`}
        >
          <i
            class={`fa-solid fa-circle mr-1 ${status === "Open" && "text-[#02A53B]"} ${status === "In Progress" && "text-[#FEBB0C]"}`}
          ></i>
          {status}
        </h5>
      </div>
      <div className="flex-1">
        <p className="text-[#627382] text-base">{description}</p>
      </div>
      <div className="flex justify-between text-[#627382]">
        <div>
          <span>#{id}</span>
          <span className={`ml-3 ${priority==="High"&& "text-red-700"} ${priority==="Medium"&& "text-[#FEBB0C]"}`}>{priority} </span>
        </div>
        <div className="text-[#627382]">
          <span>{customer}</span>
          <span className="ml-3"><i class="fa-regular fa-calendar ml3"></i>   {date}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
