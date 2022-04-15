import React, { FC, useState } from "react";
import { Button, Modal, Row } from "antd";
import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
        <EventForm />
      </Modal>
    </div>
  );
};

export default Event;
