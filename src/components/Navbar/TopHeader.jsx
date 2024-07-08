import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ScheduleForm from "../Forms/ScheduleForm";
import QuoteForm from "../Forms/QuoteForm";

const TopHeader = () => {
  const [dateTime, setDateTime] = useState({
    day: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[now.getDay()];
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = `${hours % 12 || 12}:${
        minutes < 10 ? `0${minutes}` : minutes
      }${hours >= 12 ? "pm" : "am"}`;

      setDateTime({ day, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <>
        <div className="bg-blue-900 text-white flex justify-between items-center py-2 px-8">
          <div className="flex items-center space-x-2">
            <i className="fas fa-clock text-yellow-500"></i>
            <span>
              It's {dateTime.day}, {dateTime.time} & We are open Till 11:00pm
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fas fa-calendar-alt text-yellow-500"></i>
              <Link to="/schedule">Schedule a Service</Link>
            </div>
            <div className="border-r border-white h-4"></div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-fire text-yellow-500"></i>
              <Link to="/qoute">Request a Quote</Link>
            </div>
            <div className="border-r border-white h-4"></div>
            <div className="flex items-center space-x-4">
              <i className="fab fa-facebook text-white"></i>
              <i className="fab fa-twitter text-white"></i>
              <i className="fab fa-instagram text-white"></i>
              <i className="fab fa-pinterest text-white"></i>
            </div>
          </div>
        </div>
      </>
      <Routes>
        <Route path="/schedule" component={<ScheduleForm />} />
        <Route path="/quote" component={<QuoteForm />} />
      </Routes>
    </Router>
  );
};

export default TopHeader;
