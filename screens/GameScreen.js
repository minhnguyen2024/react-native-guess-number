import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude){
    const randomNum = Math.floor(Math.random() * ( max - min )) + min;

    if (randomNum === exclude){
        return generateRandomBetween(max, min, exclude)
    }
    else{
        return randomNum;
    }
}

export default function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    return (  
        <View styles={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
})