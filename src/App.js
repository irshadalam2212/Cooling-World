import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TopHeader from "./components/Navbar/TopHeader";
import MiddleHeader from "./components/Navbar/MiddleHeader";
import MainNavbar from "./components/Navbar/MainNavbar";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Service from "./pages/Service";
import WorkGallery from "./pages/WorkGallery";
import TestimonialAndContactForm from "./pages/TestimonialAndContactForm";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />

      <Router>
        <div>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <WelcomePage />
      <Service />
      <WorkGallery />
      <TestimonialAndContactForm />
      <Footer/>
    </>
  );
}

// const Home = () => <div>Home Page</div>;
const About = () => <div>About Us Page</div>;
const Services = () => <div>Services Page</div>;
const Reviews = () => <div>Reviews Page</div>;
const Specials = () => <div>Specials Page</div>;
const Blog = () => <div>Blog Page</div>;
const Contact = () => <div>Contact Us Page</div>;

export default App;
