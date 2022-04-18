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
      const { data } = await axios.get("./users.json");

      dispatch(EventActionCreators.setGuest(data));
    } catch (err) {
      console.log(err);
    }
  },

  // logout: () => async (dispatch: any) => {
  //   localStorage.removeItem("auth");
  //   localStorage.removeItem("username");
  //   dispatch(AuthActionCreators.setUser({} as IUser));
  //   dispatch(AuthActionCreators.setAuth(false));
  // },
};
