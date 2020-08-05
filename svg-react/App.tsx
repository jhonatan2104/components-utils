import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Circle from './src/pages/Circle';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' /> 
      <Circle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
