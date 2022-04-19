import React, { FC } from "react";
import { Calendar as CalendarItem, Modal, Row } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface CalendarProps {
  events: IEvent[];
}

const Calendar: FC<CalendarProps> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map((item, index) => (
          <div key={index}>{item.description}</div>
        ))}
      </div>
    );
  }

  return <CalendarItem dateCellRender={dateCellRender} />;
};

export default Calendar;
