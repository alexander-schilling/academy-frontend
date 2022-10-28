import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavbarComponent from "../../components/NavbarComponent";

import "./styles.css";

export const AppLayout: FunctionComponent = () => {
  return (
    <div className="app-layout">
      <NavbarComponent />

      <main className="content-container">
        <Outlet />
      </main>

      <Toaster />
    </div>
  );
};
