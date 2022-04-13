import React from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/action-creator/auth";

const LoginForm = () => {
  const dispatch = useDispatch();

  const submit = () => {
    console.log("submit");
    dispatch(AuthActionCreators.login("me", "sda"));
  };

  return (
    <Form onFinish={submit}>
      <Form.Item
        label="username"
        name="username"
        rules={[rules.required("username must be")]}
      ></Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[rules.required("password must be")]}
      ></Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Input />
    </Form>
  );
};

export default LoginForm;
