import { put, all, takeEvery, call } from "redux-saga/effects";
import { getError } from "../helpers";
import { form as formActions } from "../symbiotes/actions";
import api from "../api";

function* getForm({ payload: { id } }) {
  try {
    const {
      data: {
        form: { id: formId, name: formName, uiElements: formStructure, languages: formLanguages, image: formLogo },
      },
    } = yield call(api.getForm, id);

    yield put(
      formActions.getFormSuccess({
        formId,
        formName,
        formStructure,
        formLanguages,
        formLogo,
      })
    );
  } catch ({ response }) {
    const error = getError(response);
    yield put(formActions.getFormError(error));
  }
}

function* updateForm({ payload: { id, form, logo, deleteLogo, shouldGoHomeAfterSave } }) {
  try {
    const data = new FormData();
    data.set("form", JSON.stringify({ form }));
    if (logo) {
      data.set("logo", logo);
    }
    if (deleteLogo) {
      data.set("deleteLogo", JSON.stringify(deleteLogo));
    }

    const {
      data: {
        form: { id: formId, name: formName, uiElements: formStructure, languages: formLanguages, image: formLogo },
      },
    } = yield call(api.updateForm, { id, data });
    yield put(
      formActions.updateFormSuccess({
        formId,
        formName,
        formStructure,
        formLanguages,
        formLogo,
      })
    );
    // TODO: implement check if we should go back to forms list when pages will be ready
    // if (shouldGoHomeAfterSave) {
    // Router.push("/");
    // }
  } catch ({ response }) {
    const error = getError(response);
    yield put(formActions.updateFormError(error));
  }
}

function* generateFormArchive({ payload: { id } }) {
  try {
    const {
      data: { formZipPath: path },
    } = yield call(api.generateFormArchive, id);

    const link = document.createElement("a");
    link.href = path;
    link.click();

    yield put(formActions.generateFormArchiveSuccess());
  } catch ({ response }) {
    const error = getError(response);
    yield put(formActions.generateFormArchiveError(error));
  }
}

function* setFormActiveElement({ payload: { formActiveElement } }) {
  yield put(
    formActions.setFormActiveElementSuccess({
      formActiveElement,
    })
  );
}

export function* formSaga() {
  yield all([
    takeEvery(formActions.getForm.toString(), getForm),
    takeEvery(formActions.updateForm.toString(), updateForm),
    takeEvery(formActions.generateFormArchive.toString(), generateFormArchive),
    takeEvery(formActions.setFormActiveElement.toString(), setFormActiveElement),
  ]);
}
