import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import Books from './screens/Books';
import BookDetailScreen from './screens/BookDetailScreen';
import Read from './screens/Read';

export default function App() {
  return (
    <View style={styles.container}>
      <Read/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
