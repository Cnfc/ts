import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div>Your name is Max</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => navigate("/login")} key={1}>
                You are in {user.username}
              </Menu.Item>
              <Menu.Item onClick={logout()} key={2}>
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
