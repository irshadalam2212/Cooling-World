import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
