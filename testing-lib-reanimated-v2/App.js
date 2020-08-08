import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Login from './src/Login';
import Scroll from './src/Scroll';
import Drag from './src/Drag';
import ScrollTransform from './src/ScrollTransform';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#13131a" barStyle="light-content" />
      <ScrollTransform />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#13131a',
  },
});

export default App;
