import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback, Text, Image, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import IconsComp from '../components/IconsComp';
import CommentsComps from '../components/CommentsComps';

const videoSources = [
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
    { uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
];

const comments = [
    {
        id: 1,
        user: 'John Doe',
        avatar: 'data:image/jpeg;base64,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',
        comment: 'This is an amazing video!',
    },
    {
        id: 2,
        user: 'Jane Smith',
        avatar: 'data:image/jpeg;base64,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',
        comment: 'Really enjoyed watching this!',
    },
    {
        id: 3,
        user: 'Alice Johnson',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s',
        comment: 'Great content, thanks for sharing!',
    },
    {
        id: 4,
        user: 'Alice Johnson',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s',
        comment: 'Great content, thanks for sharing!',
    },
    {
        id: 5,
        user: 'Alice Johnson',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s',
        comment: 'Great content, thanks for sharing!',
    },
    {
        id: 6,
        user: 'Alice Johnson',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s',
        comment: 'Great content, thanks for sharing!',
    },
    {
        id: 7,
        user: 'Alice Johnson',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5rJ9bo6bWmO5V55oahnFe3fH8B38cp6guQ&s',
        comment: 'Great content, thanks for sharing!',
    },
];

export default function MainScreen() {
    const { height, width } = Dimensions.get('window');
    const videoRef = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);  
    const [iconVisible, setIconVisible] = useState(false);

    const handleViewableItemsChanged = ({ viewableItems }) => {
        videoRef.current.forEach((ref) => {
            if (ref) ref.pauseAsync();
        });

        if (viewableItems.length > 0) {
            const index = viewableItems[0].index;
            if (videoRef.current[index]) {
                videoRef.current[index].playAsync();
                setPlayingIndex(index);
            }
        }
    };

    const handleVideoPress = (index) => {
        if (videoRef.current[index]) {
            videoRef.current[index].getStatusAsync().then(status => {
                if (status.isPlaying) {
                    videoRef.current[index].pauseAsync();
                    setPlayingIndex(null);
                } else {
                    videoRef.current[index].playAsync();
                    setPlayingIndex(index);
                }
                setIconVisible(true);
                setTimeout(() => {
                    setIconVisible(false);
                }, 2000);
            });
        }
    };

    const renderItem = ({ item, index }) => (
        <TouchableWithoutFeedback >
            <View style={{ height: height, width: width, flex: 1 }}>
                <Video
                    ref={(ref) => { videoRef.current[index] = ref; }}
                    style={styles.video}
                    source={item}
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    shouldPlay={false}
                    useNativeControls
                />
                {iconVisible && playingIndex === index && (
                    <MaterialIcons 
                        name={videoRef.current[index]?.getStatusAsync().then(status => status.isPlaying) ? "play-arrow" : "pause"} 
                        size={80} 
                        color="white" 
                        style={styles.icon} 
                    />
                )}
                <View style={styles.iconContainer}>
                    <IconsComp name="thumb-up" label="Like" />
                    <IconsComp name="thumb-down" label="Dislike" />
                    <IconsComp name="visibility" label="1.2K Views" />
                    <IconsComp name="comment" label="24 Comments" />
                </View>
                <ScrollView style={styles.commentsContainer}>
                    {comments.map(comment => (
                        <CommentsComps key={comment.id} user={comment.user} avatar={comment.avatar} comment={comment.comment} />
                    ))}
                </ScrollView>
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
        height: '50%',  
    },
    icon: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        marginLeft: -40,  
        marginTop: -40,  
        zIndex: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    },
    commentsContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        maxHeight: '40%',  
        flex:1,
        backgroundColor:"black"
    },
});





