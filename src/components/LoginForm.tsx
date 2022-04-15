import React, { useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const { login } = useActions();

  const { isAuth, isLoading, error, user } = useTypedSelector(
    (state) => state.auth
  );

  const submit = () => {
    console.log(isAuth, isLoading, error, user);
    login(username, userPassword);
    console.log(isAuth, isLoading, error, user);
  };

  return (
    <Form
      onFinish={submit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // maxWidth: "50vh",
      }}
    >
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <Form.Item
          label="username"
          name="username"
          rules={[rules.required("username must be")]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[rules.required("password must be")]}
        >
          <Input.Password
            value={userPassword}
            type={"password"}
            onChange={(e) => setuserPassword(e.target.value)}
            // iconRender={(visible) =>
            //   visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            // }
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default LoginForm;
