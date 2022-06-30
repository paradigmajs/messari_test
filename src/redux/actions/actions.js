import moment from "moment";
import { get } from "../../api/server";
import { ASSETS, METRICS, CHANGE, ERROR, RELOAD } from "./types";

export const set_assets = (payload) => ({
  type: ASSETS,
  payload,
});
export const set_reload = (payload) => ({
  type: RELOAD,
  payload,
});
export const set_error = (payload) => ({
  type: ERROR,
  payload,
});
export const set_one = (payload) => ({
  type: METRICS,
  payload,
});

export const get_assets = (page, reload) => (dispatch) => {
  get(
    `assets?page=${page}&limit=20&fields=name,id,metrics`,
    (res) => {
      reload ? dispatch(set_reload(res.data)) : dispatch(set_assets(res.data));
    },
    (err) => {
      dispatch(set_error(err));
    }
  );
};
export const get_one_asset = (id) => (dispatch) => {
  // let day = moment().format('DD')-1
  // let to = moment().format('YYYY-MM-DD')
  // let from = moment().add(-1, 'days').format('YYYY-MM-DD')
  // `assets/${id}/metrics/price/time-series?start=${from}&end=${to}&interval=15m`;
  get(
    `assets/${id}/metrics`,
    (res) => {
      dispatch(set_one(res.data));
    },
    (err) => {
      dispatch(set_error(err));
    }
  );
};

