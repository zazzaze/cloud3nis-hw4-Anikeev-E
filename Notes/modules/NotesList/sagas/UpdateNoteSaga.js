import { NOTE_UPDATED, SAGA_ERROR } from "./SagasTypes";
import { put, call } from "@redux-saga/core/effects";
import axios from "axios";

export function *updateNote(action) {
    const noteForUpdate = action.updated;
    const updatedNoteId = action.id;
    let result;
    try {
        result = yield call(axios.put, 'http://localhost:3000/notes/'+updatedNoteId, noteForUpdate);
    } catch (e) {
        alert(e)
        return
    }

    yield put({type: NOTE_UPDATED, note:result.data})
}