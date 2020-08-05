import React, { useState, useEffect, useMemo } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Container, Button, ButtonText } from './styles';

const { width, height } = Dimensions.get('window');
const CircleAnimated = Animated.createAnimatedComponent(Circle);
const widthSvg = width; 
const heightSvg = height / 2;
const cx = widthSvg / 2;
const cy = heightSvg / 2;

const CircleComponents: React.FC = () => {
  const [start, setStart] = useState(false)

  const [animated] = useState(new Animated.Value(0));

  useEffect(() => {
    const toValue = start ? 0 : 1;

    Animated.spring(animated, {
      toValue,
      friction: 0,
      useNativeDriver: true,
    }).start()
  }, [start]);

  const radius = useMemo(() => animated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 130]
  }), [animated] );

  return (
      <Container>
        <Animated.View>
           <Svg width={widthSvg} height={heightSvg}>
            <CircleAnimated 
                r={radius}
                stroke="blue"
                strokeWidth="10"
                fill="green"
                {...{
                    cx,
                    cy,
                }}
            />
          </Svg>
        </Animated.View>
        <View>
          <Button onPress={() => setStart(!start)}>
            <ButtonText>START</ButtonText>
          </Button>
        </View>
      </Container>
  );
}

export default CircleComponents;