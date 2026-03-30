import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketManagement from "./components/TicketManagement";
import DashboardSummary from "./components/DashboardSummary";
import {ToastContainer} from "react-toastify";
const fetchTicket = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const ticketPromise = fetchTicket();
function App() {
  const [taskQueue, setTaskQueue] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  // console.log(resolvedTask, "central");
  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-20 space-y-28">
        <DashboardSummary
          resolvedTask={resolvedTask}
          taskQueue={taskQueue}
        ></DashboardSummary>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <TicketManagement
            resolvedTask={resolvedTask}
            setResolvedTask={setResolvedTask}
            taskQueue={taskQueue}
            setTaskQueue={setTaskQueue}
            ticketPromise={ticketPromise}
          ></TicketManagement>
        </Suspense>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
