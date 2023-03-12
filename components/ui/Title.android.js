import { Text, StyleSheet, Platform } from "react-native";
//children is another kind of props, 
//but refering to children does not need to creat a prop and pass in arguments
export default function Title ({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    //styling for titles
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center', // use to align text
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2}),
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})