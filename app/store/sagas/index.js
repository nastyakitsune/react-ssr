import { all } from "redux-saga/effects";
import { dataSaga } from "./data";
import { formSaga } from "./form";

export function* sagas() {
  yield all([dataSaga(), formSaga()]);
}
