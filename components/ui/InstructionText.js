import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors'

//style props replicates CSS, passing style as array
export default function InstructionText({children, style}){ 
    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})