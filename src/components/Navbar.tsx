import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={() => navigate("/login")} key={1}>
            Login
          </Menu.Item>
          <Menu.Item onClick={() => navigate("/")} key={1}>
            Home
          </Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
