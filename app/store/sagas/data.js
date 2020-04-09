import { put, all, takeEvery, call } from "redux-saga/effects";
import { getError } from "../helpers";
import { data as dataActions, form as formActions } from "../symbiotes/actions";
import api from "../api";

function* getForms({ payload: { page } }) {
  try {
    const response = yield call(api.getForms, page);
    const {
      data: {
        forms,
        meta: { currentPage: formsCurrentPages, totalPages: formsTotalPages },
      },
    } = response;

    yield put(
      dataActions.getFormsSuccess({
        forms,
        pagination: {
          totalPages: parseInt(formsTotalPages),
          currentPage: parseInt(formsCurrentPages),
        },
      })
    );
  } catch ({ response }) {
    const error = getError(response);
    yield put(dataActions.getFormsError(error));
  }
}

function* addForm({ payload: { form, logo } }) {
  try {
    const data = new FormData();
    data.set("form", JSON.stringify({ form }));
    if (logo) {
      data.set("logo", logo);
    }

    const response = yield call(api.addForm, data);
    const {
      data: {
        form: { id },
      },
    } = response;

    yield put(dataActions.addFormSuccess());
    // TODO: implement push to added form when form page will be ready
    // Router.push(`/forms/${id}`);
  } catch ({ response }) {
    const error = getError(response);
    yield put(dataActions.addFormError(error));
  }
}

function* resetError() {
  yield all([put(dataActions.resetErrorSuccess()), put(formActions.resetErrorSuccess())]);
}

export function* dataSaga() {
  yield all([
    takeEvery(dataActions.addForm.toString(), addForm),
    takeEvery(dataActions.getForms.toString(), getForms),
    takeEvery(dataActions.resetError.toString(), resetError),
  ]);
}
