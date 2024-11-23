import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CategoryItem = ({ iconName, iconSize, iconColor, categoryText, textStyle, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialIcons name={iconName} size={iconSize || 80} color={iconColor || '#000'} />
      <Text style={[styles.text, textStyle]}>{categoryText || "Category"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal:20
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryItem;
