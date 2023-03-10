import { View, StyleSheet, Alert} from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude){
    const randomNum = Math.floor(Math.random() * ( max - min )) + min;
    if (randomNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }
    else{
        return randomNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

//see vid 65 @8:00 for use of bind() function
//passing function with argument in React props with bind() function
//useEffect => run logic when state/dependencies changes
export default function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    // const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    
    //useEffect will run after the states are set
    useEffect(()=>{
        if (currentGuess == userNumber){
            onGameOver() //callback function to gameOverHandler
        }
    }, [currentGuess, userNumber, onGameOver]) //useEffect execute when any of these dependencies change


    function nextGuessHandler(direction){ // 'lower' or 'greater'
        console.log('button pressed')
        if ((direction ==='lower' && currentGuess < userNumber) 
        || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie", "You know that this is wrong...", [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return
        }
        direction === 'lower' ? maxBoundary = currentGuess : minBoundary = currentGuess + 1
        
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        console.log(minBoundary,"-", "guess: ", newRandomNumber,"-", maxBoundary)
        setCurrentGuess(newRandomNumber)
    }

    return (  
        <View styles={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton onPrimaryButtonPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <PrimaryButton onPrimaryButtonPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    singleButtonContainer:{
        flex: 1
    },
    instructionText:{
        marginBottom: 12
    }
})