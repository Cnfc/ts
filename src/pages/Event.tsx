import React, { FC, useEffect, useState } from "react";
import { Button, Form, Modal, Row, DatePicker } from "antd";

import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

  console.log(guests, "Guest IS");
  return (
    <div>
      Event
      <h2>Event</h2>
      <Calendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add Event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </div>
  );
};

export default Event;
