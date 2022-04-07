import React, { FC } from "react";
import UserList from "./components/UserList";
import "./App.css";
import AppRouter from "./router/AppRouter";

const App: FC = () => {
  return (
    <div>
      {/* <UserList /> */}
      <AppRouter />
    </div>
  );
};

export default App;
