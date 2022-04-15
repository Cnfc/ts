import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const useAuth = () => {
  const user = true;
  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  console.log("Auth is auth", isAuth);

  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
