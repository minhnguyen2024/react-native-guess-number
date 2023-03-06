import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function PrimaryButton({children}){
    function pressHandler(){
        console.log('pressed')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={pressHandler} 
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
        backgroundColor: '#72063c',
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