import React from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";

const LoginForm = () => {
  const onFinish = () => {
    console.log("onFinish");
  };

  return (
    <Form onFinish={onFinish}>
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
