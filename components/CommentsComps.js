import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function CommentsComps({ user, avatar, comment }) {
    return (
        <View style={commentStyles.commentContainer}>
            <Image source={{ uri: avatar }} style={commentStyles.avatar} />
            <View style={commentStyles.commentTextContainer}>
                <Text style={commentStyles.username}>{user}</Text>
                <Text style={commentStyles.commentText}>{comment}</Text>
            </View>
        </View>
    );
}

const commentStyles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentTextContainer: {
        flex: 1,
    },
    username: {
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 3,
    },
    commentText: {
        color: 'white',
    },
});