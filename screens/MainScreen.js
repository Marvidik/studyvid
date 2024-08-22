import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';  // Importing icons

const videoSources = [
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    
];


export default function MainScreen() {
    const { height, width } = Dimensions.get('window');
    const videoRef = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);  // Track the currently playing video
    const [iconVisible, setIconVisible] = useState(false);  // Track visibility of the icon

    const handleViewableItemsChanged = ({ viewableItems }) => {
        // Pause all videos
        videoRef.current.forEach((ref) => {
            if (ref) ref.pauseAsync();
        });

        // Play the first viewable item
        if (viewableItems.length > 0) {
            const index = viewableItems[0].index;
            if (videoRef.current[index]) {
                videoRef.current[index].playAsync();
                setPlayingIndex(index);  // Update the currently playing index
            }
        }
    };

    const handleVideoPress = (index) => {
        if (videoRef.current[index]) {
            videoRef.current[index].getStatusAsync().then(status => {
                if (status.isPlaying) {
                    videoRef.current[index].pauseAsync();
                    setPlayingIndex(null);  // Reset playing index if paused
                } else {
                    videoRef.current[index].playAsync();
                    setPlayingIndex(index);  // Update the currently playing index
                }
                setIconVisible(true);  // Show icon
                setTimeout(() => {
                    setIconVisible(false);  // Hide icon after 2 seconds
                }, 2000);
            });
        }
    };

    const renderItem = ({ item, index }) => (
        <TouchableWithoutFeedback onPress={() => handleVideoPress(index)}>
            <View style={{ height: height, width: width }}>
                <Video
                    ref={(ref) => { videoRef.current[index] = ref; }}
                    style={styles.video}
                    source={item}
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    shouldPlay={false}  // Initially, do not auto-play
                    useNativeControls
                />
                {iconVisible && playingIndex === index && (
                    <MaterialIcons 
                        name={videoRef.current[index]?.getStatusAsync().then(status => status.isPlaying) ? "play-arrow" : "pause"} 
                        size={100} 
                        color="white" 
                        style={styles.icon} 
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <FlatList
            data={videoSources}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="fast"
            onViewableItemsChanged={handleViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '60%',  // Full height for the video
    },
    icon: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        marginLeft: -50,  // Half of icon width for centering
        marginTop: -50,   // Half of icon height for centering
        zIndex: 1,
    },
});
