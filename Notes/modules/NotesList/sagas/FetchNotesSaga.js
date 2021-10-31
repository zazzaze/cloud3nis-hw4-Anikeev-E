import { put, call } from "@redux-saga/core/effects";
import { NOTES_FETCHED, SAGA_ERROR } from "./SagasTypes";
import axios from "axios";

export function *fetchNotes() {
    let notesLoaded;
    try {
        notesLoaded = yield call(axios.get, 'http://localhost:3000/notes/')
    } catch(e) {
        alert(e)
        return
    }

    yield put({type: NOTES_FETCHED,  notes: notesLoaded.data })
}