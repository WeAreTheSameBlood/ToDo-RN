import React, {useState} from "react";
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native'

export const AddToDo = ({onSumbit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSumbit(value)
            setValue("")
        } else {
            Alert.alert('Incorrect title of task')
        }
    }
    return (
        <View style = {styles.block}>
            <TextInput 
            style = {styles.input} 
            placeholder='Enter new task'
            placeholderTextColor={'#808080'}
            keyboardType='default'

            onChangeText={text => setValue(text)}
            value={value}
            />
            <Button title="Add task" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginBottom: 10
    },
    input : {
        width: '70%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
})