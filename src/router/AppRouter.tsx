import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Event from "../pages/Event";
import Protected from "../pages/Protected";
import App from "../App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/event" element={<Event />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/protected" element={<Protected />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
