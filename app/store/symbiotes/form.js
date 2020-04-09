import { createSymbiote } from "redux-symbiote";
import { success, error, loading } from "../helpers";

const initialState = {
  formId: "",
  formName: "",
  formStructure: {},
  uidsToDelete: [],
  error: null,
  loading: false,
  formLanguages: [],
  formActiveElement: null,
};

const symbiotes = {};

const actionCreators = ["getForm", "updateForm", "resetError", "setFormActiveElement", "generateFormArchive"];

actionCreators.forEach((action) => {
  const errorAction = `${action}Error`;
  const successAction = `${action}Success`;

  symbiotes[action] = loading;
  symbiotes[errorAction] = error;
  symbiotes[successAction] = success;
});

export const { actions, reducer } = createSymbiote(initialState, symbiotes, "form");
