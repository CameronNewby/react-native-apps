import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import NoteItem from './components/NoteItem';
import NoteInput from './components/NoteInput';

export default function App() {
  const [notesList, setNotesList] = useState([]);
  const [isAddNote, setIsAddNote] = useState(false);

  function addNoteHandler(noteText) {
    setNotesList(notesList => [
      ...notesList, 
      { id: Math.random().toString(), text: noteText }
    ]);
    setIsAddNote(false);
  }

  function deleteNoteHandler(noteId) {
    setNotesList(notesList => {
      return notesList.filter((note) => note.id !== noteId);
    })
  }

  function cancelNoteAddHandler() {
    setIsAddNote(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Note" onPress={() => setIsAddNote(true)} />
      <NoteInput visible={isAddNote} onAddNote={addNoteHandler} onCancel={cancelNoteAddHandler} />
      <FlatList
        data={notesList}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => 
          <NoteItem 
            onDelete={deleteNoteHandler}
            id={itemData.item.id}
            text={itemData.item.text} 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});
