import { View, StyleSheet, Alert, Text, FlatList, useWindowDimensions} from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";


//being managed outside component => will not be reset/re-excecuted every for every change of state
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
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions()

    
    //useEffect will run after the states are set
    useEffect(()=>{
        if (currentGuess == userNumber){
            //communication from App.js to GameScreen.js
            onGameOver(guessRounds.length) //callback function to App.js/gameOverHandler
        }
    }, [currentGuess, userNumber, onGameOver]) //useEffect execute when any of these dependencies change

    useEffect(() =>{
        minBoundary = 1
        maxBoundary = 100
    }, [])


    function nextGuessHandler(direction){ // 'lower' or 'greater'
        if ((direction ==='lower' && currentGuess < userNumber) 
        || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie", "You know that this is wrong...", [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return
        }
        direction === 'lower' ? maxBoundary = currentGuess : minBoundary = currentGuess + 1
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)

        //updating states that involves adding to old state => use function
        setGuessRounds(prevGuessRound =>  [newRandomNumber, ...prevGuessRound])
        // console.log(guessRounds)
    }

    const guessRoundListLength = guessRounds.length
    let content = <>
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
        </>
    if(width > 500){
        content = 
        <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton onPrimaryButtonPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton onPrimaryButtonPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                </View>
            </View>
        </>
    }

    return (  
        <View styles={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}></GuessLogItem>}
                keyExtractor={(item) => item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonsContainerWide:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    singleButtonContainer:{
        flex: 1
    },
    instructionText:{
        marginBottom: 12
    },
    listContainer:{
        flex: 1,
        padding: 16
    }
})