import { Text, View, StyleSheet } from "react-native";


//children is another kind of props, 
//but refering to children does not need to creat a prop and pass in arguments
import Colors from "../../constants/colors";
export default function Title ({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    //styling for titles
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center', // use to align text
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})