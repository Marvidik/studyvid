import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchInput = ({ placeholder, value, onChangeText, onSearch }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search"}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch} // Optional: trigger search on "Enter"
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    height:50,
    marginHorizontal:15,
    marginTop:30
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchInput;
