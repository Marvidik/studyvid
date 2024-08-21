import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default function MainScreen() {
    const background = require('../assets/dashboard.mp4');

    return (
        <Video 
            source={background}
            style={styles.backgroundVideo}
        />
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
