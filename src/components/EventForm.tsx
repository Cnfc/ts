import React, { FC } from "react";
import { Form, Input, DatePicker, Button, Row, Select } from "antd";

import { rules } from "../utils/rules";

const EventForm: FC = () => {
  const onchange = () => {};

  return (
    <Form>
      <Form.Item
        label="Events name"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <DatePicker onChange={onchange} />
      <Form.Item
        label="Date Event"
        name="date"
        rules={[rules.required()]}
      ></Form.Item>

      <Select defaultValue="lucy" onChange={() => {}}>
        <Select.Option value="Lucy">Luccy</Select.Option>
      </Select>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={false}>
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
