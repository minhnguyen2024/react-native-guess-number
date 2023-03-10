import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

//expo install expo-app-loading
import AppLoading  from 'expo-app-loading'

//using custiom fonts in React Native, expo install expo-font
import {useFonts} from 'expo-font'

import Colors from './constants/colors';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameIsOver from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }
  //props onPickNumber in StartGameScreen, will pass pickedNumberHandler as a callback function
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen 
    userNumber={userNumber} 
    onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameIsOver/>
  }



  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      
      <ImageBackground 
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
      style={styles.rootScreen}
      >
        
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
     
      </ImageBackground>
    </LinearGradient>
  );
  //SafeAreaView to take care of different iPhone notchs
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1
  },
  backgroundImage:{
    opacity: 0.15
  }
});
