import Card from '../components/Card'
import Number from '../components/Number'
import React, {useState, useRef, useEffect} from 'react'
import { generateRandomBetween } from '../utils/NumberUtils'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

interface IGameScreenProps {
  userChoise: number
  onGameOver: (number: number) => void
}

enum Direction {
  LOWER = 'lower',
  GREATER = 'greater'
}

const GameScreen = (props: IGameScreenProps) => {
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const { userChoise, onGameOver } = props

  const [rounds, setRounds] = useState<number>(0)
  const [currentGuess, setCurrentGuess] = useState<number>(generateRandomBetween(1, 100, userChoise))

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoise, onGameOver])

  const validateLie = (direction: Direction): boolean => {
    return (
      (direction === 'lower' && currentGuess < userChoise) || 
      (direction === 'greater' && currentGuess > userChoise)
    )
  }

  const nextGuess = (direction: Direction) => {
    if (validateLie(direction)) {
      Alert.alert('Don\'t Lie!')
      return
    }

    if (direction === Direction.LOWER) {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber: number = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
  }

  return(
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}> 
        <Button title="Lower" onPress={nextGuess.bind(this, Direction.LOWER)} />
        <Button title="Greater" onPress={nextGuess.bind(this, Direction.GREATER)} />
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    width: 300,
    marginTop: 20,
    maxWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
    
export default GameScreen