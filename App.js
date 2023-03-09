import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from './constants/colors';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()


  //props onPickNumber in StartGameScreen, will pass pickedNumberHandler as a callback function
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen userNumber={userNumber}/>
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
