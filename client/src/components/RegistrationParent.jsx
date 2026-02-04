import { useState } from "react";
import EventRegister from "./EventRegister";
import Register from "../pages/Register";

const RegistrationPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedEvent ? (
        <EventRegister onContinue={setSelectedEvent} />
      ) : (
        <Register selectedEvent={selectedEvent} />
      )}
    </div>
  );
};

export default RegistrationPage;
