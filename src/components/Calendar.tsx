import React, { FC, useState } from "react";
import { Button, Calendar as CalendarItem, Modal, Row } from "antd";
import { IEvent } from "../models/IEvent";

interface CalendarProps {
  events: IEvent[];
}

const Calendar: FC<CalendarProps> = () => {
  return (
    <>
      <CalendarItem></CalendarItem>;
    </>
  );
};

export default Calendar;
