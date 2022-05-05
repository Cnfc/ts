import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Event from "../pages/Event";
import Home from "../pages/Home";
import Sv from "../pages/SV/Sv";
import Protected from "../pages/Protected";
import TSSearch from "../pages/TSSearch";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sv" element={<Sv />} />
      <Route path="/ts" element={<TSSearch />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

      <Route element={<ProtectedRoutes />}>
        <Route path="/protected" element={<Protected />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
