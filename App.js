import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screen/Homescreen';

export default function App() {
  return (
    <View >
    
    <Homescreen />
      
      <StatusBar style="auto" />
    </View>
  );
}
