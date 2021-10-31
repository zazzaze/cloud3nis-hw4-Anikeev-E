import { takeLatest, takeEvery } from 'redux-saga/effects'
import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/ActionTypes'
import { fetchNotes } from './FetchNotesSaga'
import { createNote } from './CreateNoteSaga'
import { deleteNote } from './DeleteNoteSaga'
import { updateNote } from './UpdateNoteSaga'

export function *rootSaga() {
    yield takeLatest(FETCH_NOTES, fetchNotes)
    yield takeEvery(ADD_NOTE, createNote)
    yield takeEvery(DELETE_NOTE, deleteNote)
    yield takeEvery(UPDATE_NOTE, updateNote)
}
