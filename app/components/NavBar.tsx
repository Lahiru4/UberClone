import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FiAlignJustify} from "react-icons/fi";


export default function NavBar() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.brand}>Uber</Text>
                <TouchableOpacity>
                    <Text style={styles.login}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signup}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}><FiAlignJustify/>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', // Use 'absolute' for fixed positioning in React Native
        top: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#000000',
        justifyContent: 'space-between', // Distributes space evenly
        alignItems: 'center', // Centers items vertically
        flexDirection: 'row', // Align children in a row
        paddingHorizontal: 20, // Add padding to left and right
    },
    content: {
        flexDirection: 'row', // Align content in a row
        alignItems: 'center', // Center vertically
    },
    brand: {
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: 20,
    },
    login: {
        marginLeft: 150,
        fontSize: 16,
        color: 'white',
    },
    signup: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2,
        paddingVertical: 7,
        paddingHorizontal: 12,
    },
    buttonContainer: {
        marginRight: 10,
    },
    button: {},
    buttonText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
    },
});
