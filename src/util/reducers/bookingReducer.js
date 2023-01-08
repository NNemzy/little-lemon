import { fetchAPI } from "../bookingApi/api";

const currentDate = new Date();

export function reducer(state, action) {
  switch (action.type) {
    case "DATE_CHANGE":
      return fetchAPI(new Date(action.payload));
    case "INIT":
      return fetchAPI(currentDate);
    default:
      return state;
  }
}
