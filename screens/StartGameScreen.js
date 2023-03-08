import { TextInput, View, StyleSheet, Alert} from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from 'react'

export default function StartGameScreen(){
    const [enteredNumber, setEnteredNumber] = useState('') //string binding to text input, number-pad returns string

    //handling input: use onChangeText of TextInput
    //enteredText
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99',
            [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
            return
        }
        console.log('Valid Number')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={numberInputHandler}
                /> 
            <View style={styles.buttonsContainer}>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.singleButtonContainer}>
                    <PrimaryButton onPrimaryButtonPress={confirmInputHandler}>Confirm</PrimaryButton>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: 'purple',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8, //Android only
        //iOS shadow configs
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        color: 'yellow',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center' //text align with parent obj
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    singleButtonContainer:{
        flex: 1
    }
})