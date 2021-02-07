import React from 'react'
import Card from '../components/Card'
import { StyleSheet, View, Text, Button } from 'react-native'

interface IGameOverScreenProps {
  rounds: number
  userNumber: number
  onNewGame: () => void
}

const GameOverScreen = (props: IGameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>The game is over!</Text>
        <Text>Number of rounds: {props.rounds}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <View style={styles.newGameButton}>
          <Button title="New Game" onPress={props.onNewGame} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    alignItems: 'center'
  },
  newGameButton: {
    paddingTop: 25
  }
})
    
export default GameOverScreen