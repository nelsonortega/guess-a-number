import React from 'react'
import Header from './components/Header'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={styles.screen}>
        <Header title="Guess a Number"/>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App