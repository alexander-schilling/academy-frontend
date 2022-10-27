import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout: FunctionComponent = () => {
  return (
    <div className="app-layout">
      <Outlet />
    </div>
  );
};
