import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { GoArrowRight } from "react-icons/go";

const AnimatedArrowIcon: React.FC = () => {
    const translateX = useRef(new Animated.Value(-100)).current; // Start off-screen
    const scale = useRef(new Animated.Value(1)).current; // Scale value for hover effect
    const [isHovered, setIsHovered] = useState(false); // State to track hover status

    useEffect(() => {
        const startAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.delay(1000), // Delay before starting the animation
                    Animated.timing(translateX, {
                        toValue: 0, // Slide to the original position
                        duration: 3000, // Duration of the slide
                        useNativeDriver: true, // Use native driver for performance
                    }),
                    Animated.timing(translateX, {
                        toValue: -100, // Slide back off-screen
                        duration: 3000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        startAnimation();
    }, [translateX]);

    // Handle hover effect
    const handlePressIn = () => {
        Animated.timing(scale, {
            toValue: 1.2, // Scale up on press
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scale, {
            toValue: 1, // Scale back to original size
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => console.log('Icon pressed!')} // Handle the press action
            >
                <Animated.View style={{ transform: [{ translateX }, { scale }] }}>
                    <GoArrowRight name="arrow-right" size={30} color="#000" /> {/* Use your preferred icon */}
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AnimatedArrowIcon;
