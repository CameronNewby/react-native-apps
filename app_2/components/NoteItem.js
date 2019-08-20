import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NoteItem = props => {
    return (    
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.noteList}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    noteList: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'grey',
        borderWidth: 0.5
    }
});

export default NoteItem;
