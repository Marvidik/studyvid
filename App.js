import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
