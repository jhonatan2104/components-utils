/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import randomcolor from 'randomcolor';

const ARRAY_COLORS = [
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
  {
    color: randomcolor(),
  },
];

const ScrollTransform = () => {
  const direction = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, ctx) => {
      const dy = event.contentOffset.y - (ctx?.y ?? 0);
      direction.value = Math.sign(dy);
      ctx.y = event.contentOffset.y;
    },
    onEndDrag: () => {
      direction.value = 0;
    },
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={{alignSelf: 'center'}}>
      {ARRAY_COLORS.map(({color}) => {
        const style = useAnimatedStyle(() => {
          const skewY = interpolate(
            direction.value,
            [-1, 0, 1],
            [-Math.PI / 18, 0, Math.PI / 18],
          );

          return {
            transform: [{skewY: `${skewY}rad`}],
          };
        });
        return (
          <Animated.View
            key={color}
            style={[
              {
                width: 300,
                height: 200,
                backgroundColor: color,
                marginTop: 20,
                marginBottom: 20,
              },
              style,
            ]}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default ScrollTransform;
