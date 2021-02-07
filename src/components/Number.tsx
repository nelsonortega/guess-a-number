import React, { ReactNode } from 'react'
import Colors from '../constants/Colors'
import { View, Text, StyleSheet } from 'react-native'

interface INumberProps {
  children: ReactNode
}

const Number = (props: INumberProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.primary,
    fontSize: 22
  }
})

export default Number