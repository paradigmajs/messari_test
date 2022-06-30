import { ASSETS, CHANGE, RELOAD } from "../actions/types";

const initialState = [];

export const messari = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ASSETS:
      return [...state, ...payload];
    case RELOAD:
      return payload;
    default:
      return state;
  }
};
