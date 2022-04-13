import { Layout, Row } from "antd";
import React, { FC } from "react";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100"></Row>

      <LoginForm />
    </Layout>
  );
};

export default Login;
