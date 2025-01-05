import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();
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
            {/* <Link to="/schedule">Schedule a Service</Link> */}
            <span
              className="cursor-pointer"
              onClick={() => navigate("/schedule")}
            >
              Schedule a service
            </span>
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
    // <Routes>
    //
    // </Routes>
  );
};

export default TopHeader;
