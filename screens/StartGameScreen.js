import { TextInput, View, StyleSheet} from "react-native"
import PrimaryButton from "../components/PrimaryButton"

export default function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"/> 
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
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
    }
})