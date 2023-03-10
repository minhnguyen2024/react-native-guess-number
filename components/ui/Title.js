import { Text, StyleSheet } from "react-native";
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
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})