import React, { FC, useEffect } from "react";
import { Layout } from "antd";

import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/user";

const App: FC = () => {
  const { setAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      console.log("First Render Chech if Signin");
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
