import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketManagement from "./components/TicketManagement";
import DashboardSummary from "./components/DashboardSummary";

const fetchTicket = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const [taskQueue, setTaskQueue] = useState([]);
  const ticketPromise = fetchTicket();
  console.log(taskQueue,'central')
  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-20 space-y-28">
        <DashboardSummary></DashboardSummary>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <TicketManagement
          taskQueue={taskQueue}
          setTaskQueue={setTaskQueue}
          ticketPromise={ticketPromise}></TicketManagement>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
