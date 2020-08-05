import React, { useState, useEffect, useMemo } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { Container, Button, ButtonText } from './styles';

const { width, height } = Dimensions.get('window');
const RectAnimated = Animated.createAnimatedComponent(Rect);
const widthSvg = width; 
const heightSvg = height / 2;

const widthRect = widthSvg - 80;
const heightRect = heightSvg - 100;


const RectComponents: React.FC = () => {
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

  const rotation = useMemo(() => animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 360]
  }), [animated])

  return (
      <Container>
        <Animated.View>
           <Svg width={widthSvg} height={heightSvg}>
            <RectAnimated
              x={widthSvg / 2 - widthRect / 2}
              y={heightSvg / 2 - heightRect / 2}
              width={widthRect}
              height={heightRect}
              stroke="red"
              strokeWidth="7"
              fill="yellow"
              rotation={rotation}
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

export default RectComponents;