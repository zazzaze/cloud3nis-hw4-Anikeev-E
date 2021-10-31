import { combineReducers } from 'redux';
import notesReducer from './NotesReducer';

const reducers = combineReducers({
    notes: notesReducer
})

export default reducers