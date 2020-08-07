import React from 'react';
import {Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

const size = 120;

const initPosX = width / 2 - size / 2;
const initPosY = height / 2 - size / 2;

const Drag = () => {
  const posX = useSharedValue(initPosX);
  const posY = useSharedValue(initPosY);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.posX = posX.value;
      ctx.posY = posY.value;
    },
    onActive: (event, ctx) => {
      posX.value = ctx.posX + event.translationX;
      posY.value = ctx.posY + event.translationY;
    },
    onEnd: () => {
      posX.value = withSpring(initPosX, {mass: 10});
      posY.value = withSpring(initPosY, {mass: 5});
    },
  });
  const positionStyle = useAnimatedStyle(() => ({
    transform: [{translateX: posX.value}, {translateY: posY.value}],
  }));
  return (
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View
        style={[
          {width: size, height: size, backgroundColor: '#13131a'},
          positionStyle,
        ]}
      />
    </PanGestureHandler>
  );
};

export default Drag;
