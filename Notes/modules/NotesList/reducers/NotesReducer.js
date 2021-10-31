import Note from '../../../Models/Note';
import { NOTES_FETCHED, NOTE_CREATED, NOTE_DELETED, NOTE_UPDATED, SAGA_ERROR } from '../sagas/SagasTypes'


function notesReducer(notes = [], action) {
    switch (action.type) {
        case NOTES_FETCHED:
          return action.notes
        case NOTE_CREATED:
            return [...notes, action.note]
        case NOTE_DELETED:
            return notes.filter((note, index) => note.id != action.id)
        case NOTE_UPDATED:
            const newNotes = [...notes]
            newNotes.map(note => {
                if (note.id === action.note.id) {
                    note.title = action.note.title
                    note.text = action.note.text
                    note.image = action.note.image
                }
            })
            return newNotes
        default:
            return notes;
    }
}
  
  export default notesReducer;