import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

// import { Container } from './styles';
const Scroll = () => {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 150],
        [250, 100],
        Extrapolate.CLAMP,
      ),
    };
  });

  const opacityAvatar = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [50, 130], [1, 0], Extrapolate.CLAMP),
    };
  });

  const sizeText = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        scrollY.value,
        [0, 130],
        [20, 29],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: 250}}
        {...{onScroll}}>
        <Text style={styles.listItem}>Item Name 1</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
        <Text style={styles.listItem}>Item Name</Text>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, headerStyles]}>
        <Animated.Image
          style={[styles.avatar, opacityAvatar]}
          source={{
            uri: 'https://github.com/jhonatan2104.png',
          }}
        />
        <Animated.Text style={[styles.name, sizeText]}>
          Jhonatan Andrade
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    backgroundColor: '#6C63FF',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },

  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFF',
  },

  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;
