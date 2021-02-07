import React from 'react'
import Colors from '../constants/Colors'
import { StyleSheet, View, Text } from 'react-native'

interface IHeaderProps {
  title: String
}

const Header = (props: IHeaderProps) => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 45,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
})

export default Header