import {View, StyleSheet, Text} from 'react-native'
import Colors from '../../constants/colors'

export default function GuessLogItem({roundNumber, guess}){
    return <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        boderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flex: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        // shadowOffset: {width: 1, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText:{
        fontFamily: 'open-sans'
    }
})