import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./eventTypes";

export const EventActionCreators = {
  setGuest: (payload: IUser[]): SetGuestAction => ({
    type: EventActionEnum.SET_GUEST,
    payload,
  }),

  setEvent: (payload: IEvent[]): SetEventAction => ({
    type: EventActionEnum.SET_EVENT,
    payload,
  }),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.get<IUser[]>("./users.json");

      dispatch(EventActionCreators.setGuest(data));
    } catch (err) {
      console.log(err, "MY ERRRO");
    }
  },

  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvent(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  },

  fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      console.log(json, "FetchUsers");
      const currentUserEvents = json.filter(
        (ev) => ev.author === userName || ev.guest === userName
      );

      dispatch(EventActionCreators.setEvent(currentUserEvents));
    } catch (error) {
      console.error(error);
    }
  },
};
