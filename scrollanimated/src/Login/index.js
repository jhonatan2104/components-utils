import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  Easing,
} from 'react-native-reanimated';

const Login = () => {
  const positionValueTitle = useSharedValue(-50);
  useEffect(() => {
    positionValueTitle.value = withTiming(0, {
      duration: 500,
      easing: Easing.bounce,
    });
  }, []);

  const titleStyleAnimatedPosition = useAnimatedStyle(() => {
    return {
      transform: [{translateY: positionValueTitle.value}],
      opacity: interpolate(
        positionValueTitle.value,
        [-50, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });
  return (
    <Animated.Text style={[styles.text, titleStyleAnimatedPosition]}>
      Olá
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 37,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Login;
