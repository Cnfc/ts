import React from "react";
import { Outlet } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Login from "../pages/Login";

const ProtectedRoutes = () => {
  const { isAuth } = useTypedSelector((store) => store.auth);
  console.log("Auth is auth", isAuth);

  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
