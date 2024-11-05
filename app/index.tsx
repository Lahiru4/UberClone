import NavBar from "@/app/components/NavBar";
import React, {useEffect, useRef, useState} from "react";
import {Text, View, Image, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {black} from "colorette";
import { GoArrowRight } from "react-icons/go";



export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <NavBar/>
            <Image source={require("@/assets/images/indexImage.svg")} style={styles.mainImage} alt="index"/>
            <div style={styles.textBox}>
                <h3>Log in to access<br/> your account</h3>
            </div>
            <div style={styles.boxDriver}>
                <h3 style={{fontSize: '30px'}}>Driver</h3>
                <GoArrowRight style={{position:'absolute',top:30,left:300,fontSize:30}} />
                <div style={styles.line}></div>
            </div>
            <div style={styles.boxRider}>
                <h3 style={{fontSize: '30px'}}>Rider</h3>
                <GoArrowRight style={{position:'absolute',top:30,left:300,fontSize:30}} />
                <div style={styles.line}></div>
            </div>

        </View>
    );
}
const styles = StyleSheet.create({
    mainImage: {
        width: 350,
        height: 200,
        position: 'absolute',
        top: 110
    },
    textBox: {
        position: 'absolute',
        top: 300,
        left: 20,
        fontSize: 36,
        fontFamily: "Arial, sans-serif",
        color: '#333333'
    },
    arrow: {
        position: 'absolute',
    },
    boxDriver: {
        position: 'absolute',
        top: 450,
        left: 20,
        height: 40,
        color: 'black',
        textAlign: 'left',
        fontFamily: "Arial, sans-serif",
        width: '90%'
    },
    boxRider: {
        position: 'absolute',
        top: 540,
        left: 20,
        height: 40,
        color: 'black',
        textAlign: 'left',
        fontFamily: "Arial, sans-serif",
        width: '90%'
    },
    line: {
        backgroundColor: 'black',
        width: '100%',
        height: 2
    }


})
