import React from "react";
import Card from "./Card";

const Services = ({ services }) => {
  return (
    <div className="grid md:grid-cols-3 my-5 mx-3 gap-3">
      {services.map((service) => (
        <Card key={service.id} {...service} />
      ))}
    </div>
  );
};

export default Services;
