import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../compoents/header/header";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="center-content">
        <Outlet />
      </div>
    </>
  );
};
export default App;
