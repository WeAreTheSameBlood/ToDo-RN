import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {

    const pressOnTask = () => {
        console.log('Pressed', todo.id)
    }

    return (
        <TouchableOpacity 
        activeOpacity={1/3}
        onPress={pressOnTask}
        onLongPress={() => onRemove(todo.id)}
        >
        <View style = {styles.todo}>
            <Text> {todo.title} </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        marginBottom: 10
    }
})