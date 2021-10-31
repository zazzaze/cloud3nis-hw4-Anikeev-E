import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./ActionTypes"; 

export function fetchNotes() {
    return { type: FETCH_NOTES }
}

export function createNote(note) {
  return { type: ADD_NOTE, note: note };
}

export function deleteNote(id) {
  return { type: DELETE_NOTE, id: id };
}

export function updateNote(updatedNote, id) {
    return { type: UPDATE_NOTE, updated: updatedNote, id: id }
}