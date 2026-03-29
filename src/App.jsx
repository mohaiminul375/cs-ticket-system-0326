import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketManagement from "./components/TicketManagement";

const fetchTicket = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const ticketPromise = fetchTicket();
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] container mx-auto mt-20 space-y-20">
        <Suspense fallback={<div className="flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>}>
        <TicketManagement ticketPromise={ticketPromise}></TicketManagement>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
