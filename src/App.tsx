import React from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native'

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={styles.screen}>
        <Text>Welcome</Text>
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