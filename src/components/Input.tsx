import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

interface IInputProps {
  value: string
  onChangeText: (text: string) => void
}

const Input = (props: IInputProps) => {
  return (
    <TextInput 
      blurOnSubmit
      maxLength={2}
      value={props.value}
      style={styles.input}
      keyboardType="number-pad"
      onChangeText={props.onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 50,
    marginVertical: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
})

export default Input