import { put, call } from "@redux-saga/core/effects";
import { NOTE_DELETED, SAGA_ERROR } from "./SagasTypes";
import axios from "axios";

export function *deleteNote(action) {
    const noteForDeleteId = action.id;
    let result;
    try {
        result = yield call(axios.delete, 'http://localhost:3000/notes/' + noteForDeleteId);
    } catch(e) {
        alert(e)
        return
    }

    yield put({ type:NOTE_DELETED, id: noteForDeleteId })
}