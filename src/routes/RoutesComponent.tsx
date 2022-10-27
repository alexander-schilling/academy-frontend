import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../pages/HomePage";

export const RoutesComponent: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
