import React from "react";
import Home from "./pages/Home";
import Service from "./pages/Service";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" component={<ScheduleForm />} />
        <Route path="/quote" component={<QuoteForm />} /> */}
      </Routes>
    </>
  );
};

export default Approutes;

const About = () => <div>About Us Page</div>;
const Services = () => <div>Services Page</div>;
const Reviews = () => <div>Reviews Page</div>;
const Specials = () => <div>Specials Page</div>;
const Blog = () => <div>Blog Page</div>;
const Contact = () => <div>Contact Us Page</div>;
