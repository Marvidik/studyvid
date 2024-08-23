import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function IconsComp({ name, label }) {
    return (
        <View style={styles.iconCompContainer}>
            <MaterialIcons name={name} size={30} color="white" />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iconCompContainer: {
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
});