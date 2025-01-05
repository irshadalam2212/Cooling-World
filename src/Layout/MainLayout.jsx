import React from "react";
import TopHeader from "../components/Navbar/TopHeader";
import MiddleHeader from "../components/Navbar/MiddleHeader";
import MainNavbar from "../components/Navbar/MainNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
