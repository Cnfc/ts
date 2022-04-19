import React, { FC, useEffect, useState } from "react";
import { Button, Form, Modal, Row, DatePicker } from "antd";

import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  console.log(events);
  const addNewEvent = (e: IEvent) => {
    createEvent(e);
    setModalVisible(false);
  };

  return (
    <div>
      Event
      <Calendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add Event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={(e) => addNewEvent(e)} />
      </Modal>
    </div>
  );
};

export default Event;
