import React, { useState } from 'react'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

const App = () => {
  const [userNumber, setUserNumber] = useState<number>()

  const startGame = (selectedNumber: number) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGame} />
  
  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={styles.screen}>
        <Header title="Guess a Number"/>
        {content}
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