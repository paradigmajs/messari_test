import { METRICS } from "../actions/types";

const initialState = {};

export const asset = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case METRICS:
      return payload;
    default:
      return state;
  }
};
