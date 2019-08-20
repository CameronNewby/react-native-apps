import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

const NoteInput = props => {
    const [enteredNote, setEnteredNote] = useState('');

    function noteInputHandler(enteredText) {
        setEnteredNote(enteredText);
    }

    function addNewNoteHandler() {
        props.onAddNote(enteredNote);
        setEnteredNote('');
    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>          
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Add Note" 
                    style={styles.textInput}
                    onChangeText={noteInputHandler}
                    value={enteredNote}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addNewNoteHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '55%'
      },
      textInput: {
        width: '80%',
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        marginBottom: 10,
        padding: 10
      },
      button: {
        width: '40%'   
      }
});

export default NoteInput;
