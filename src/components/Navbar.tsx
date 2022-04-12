import { Layout, Menu, Row } from "antd";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div>Your name is Max</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => navigate("/login")} key={1}>
                You are in
              </Menu.Item>
              <Menu.Item onClick={() => {}} key={2}>
                LOGOUT
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/")} key={3}>
                Home
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => {
                  navigate("/login");
                }}
                key={1}
              >
                Login
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/")} key={2}>
                Home
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
