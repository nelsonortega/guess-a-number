import React, { useState } from 'react'
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import StartGameScreen from './screens/StartGameScreen'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

const App = () => {
  const [userNumber, setUserNumber] = useState<number>(0)
  const [guessRounds, setGuessRounds] = useState(0)

  const startNewGame = () => {
    setGuessRounds(0)
    setUserNumber(0)
  }

  const gameOver = (numberOfRounds: number) => setGuessRounds(numberOfRounds)
  const startGame = (selectedNumber: number) => setUserNumber(selectedNumber)

  let content = <StartGameScreen onStartGame={startGame} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoise={userNumber} onGameOver={gameOver} /> 
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onNewGame={startNewGame} />
  }
  
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