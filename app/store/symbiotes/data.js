import { createSymbiote } from "redux-symbiote";
import { success, error, loading } from "../helpers";

const initialState = {
  forms: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
  },
  error: null,
  loading: false,
  text: "Default",
};

const symbiotes = {};

const actionCreators = [
  "addForm",
  "removeForm",
  "exportForm",
  "previewForm",
  "editFormSettings",
  "getFormVersions",
  "getForms",
  "resetError",
];

actionCreators.forEach((action) => {
  const errorAction = `${action}Error`;
  const successAction = `${action}Success`;

  symbiotes[action] = loading;
  symbiotes[errorAction] = error;
  symbiotes[successAction] = success;
});

export const { actions, reducer } = createSymbiote(initialState, symbiotes, "data");
