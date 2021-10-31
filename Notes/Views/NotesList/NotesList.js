import React from 'react';
import { View, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, Button, Platform, RefreshControl } from 'react-native';
import Note from '../../Models/Note';
import NotesListRow from './NoteListRow';
import { useState } from "react/cjs/react.development";
import store from "../../modules/NotesList/store/Store";
import { createNote, deleteNote, fetchNotes, updateNote } from "../../modules/NotesList/actions/Action";

const NotesList = ({navigation}) => {
    const [notes, setNotes] = useState([])

    store.subscribe(() => {
        setNotes(store.getState().notes)
    })

    const didTapDeleteNote = (note) => {
        if (note.id === undefined) {
            return
        }
        store.dispatch(deleteNote(note.id))
    }

    const onCreateNote = (note, id) => {
        store.dispatch(createNote(note))
    }  

    const didUpdateNote = (note, id) => {
        store.dispatch(updateNote(note, id))
    }
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.navigationButtonsView} >
                    <View style={styles.navigationButton}>
                        <Button title="Reload" onPress={() => store.dispatch(fetchNotes())} />
                    </View>
                    <View>
                    <Button title="Create" onPress={() => {navigation.navigate('Create', {didCreateNote: onCreateNote, note: new Note("", "", null)})}} />
                    </View>
                </View>
            )
        })
    }, [navigation]);

    React.useEffect(() => {
        store.dispatch(fetchNotes())
    }, [])

    const renderItem = (note) => {
        return (
            <TouchableOpacity onPress={ () => {
                    navigation.navigate('Edit', {didCreateNote: didUpdateNote, note: note.item});
                } 
            }>
                <NotesListRow note={note.item} didTapDelete={didTapDeleteNote}/>
            </TouchableOpacity>
        )
    };

    const extractKey = (note, index) => { 
        return note.id 
    }

    return (
        <FlatList
            data={notes}
            keyExtractor={extractKey}
            renderItem={renderItem}
            style={styles.list}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 15,
        paddingLeft: Platform.OS === 'web' ? 40 : 10,
        paddingRight: Platform.OS === 'web' ? 40 : 10
    },
    navigationButtonsView: {
        flexDirection: 'row',
        marginRight: 15
    },
    navigationButton: {
        marginRight: 5
    }
})

export default NotesList