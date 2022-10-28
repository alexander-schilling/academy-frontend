import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { CoursePage } from "../pages/CoursePage";
import { CoursesPage } from "../pages/CoursesPage";
import { HomePage } from "../pages/HomePage";
import { UserLoginPage } from "../pages/UserLoginPage";
import { UserRegisterPage } from "../pages/UserRegisterPage";

export const RoutesComponent: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users">
          <Route path="login" element={<UserLoginPage />} />
          <Route path="register" element={<UserRegisterPage />} />
        </Route>
        <Route path="courses">
          <Route index element={<CoursesPage />} />
          <Route path=":courseId" element={<CoursePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
