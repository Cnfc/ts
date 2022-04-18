import React, { FC, useState } from "react";
import { Form, Input, DatePicker, Button, Row, Select } from "antd";

import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    guest: "",
    date: "",
    description: "",
  } as IEvent);

  return (
    <Form>
      <Form.Item
        label="Events name"
        name="description"
        rules={[rules.required("Title required")]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="Events date"
        name="date"
        rules={[rules.required("Date required")]}
      >
        <DatePicker onChange={} />
      </Form.Item>

      <Form.Item
        label="Pick Guest"
        name="guest"
        rules={[rules.required("Guest required")]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map((guest) => (
            <Select.Option value={guest.username} key={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

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
