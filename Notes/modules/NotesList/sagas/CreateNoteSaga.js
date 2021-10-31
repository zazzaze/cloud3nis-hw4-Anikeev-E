import { call, put } from "@redux-saga/core/effects";
import { NOTE_CREATED, SAGA_ERROR } from "./SagasTypes"; 
import axios from "axios";

export function *createNote(action) {
    const note = action.note
    let result;
    try {
        result = yield call(axios.post, 'http://localhost:3000/notes/', note)
    } catch(e) {
        alert(e)
        return
    }

    yield put({ type: NOTE_CREATED, note: result.data })
}