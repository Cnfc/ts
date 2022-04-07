import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "./components/Navbar";
import { store } from "./store";
import AppRouter from "./router/AppRouter";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
