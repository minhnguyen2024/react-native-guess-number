import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

//Setting up props for custom components:
//Pressable has onPress props, which will be used to build on-press event handlers
//=> PrimaryButton has onPressPrimaryButton as a prop (built by using a acallback function)
export default function PrimaryButton({children, onPrimaryButtonPress}){
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={onPrimaryButtonPress} 
            style={({pressed})=> pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}>
                <Text style={styles.textContainer}>{children}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 25,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.75,

    }
})