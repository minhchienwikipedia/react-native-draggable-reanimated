import React from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

const DraggableView = ({
  children,
  maxHeight = DEVICE_HEIGHT,
  minHeight = 0,
  maxWidth = DEVICE_WIDTH,
  minWidth = 0,
  initValue = { x: 0, y: 0 },
  onRelease = () => {},
  onStart = () => {},
  style,
}) => {
  const x = useSharedValue(initValue.x || 0);
  const y = useSharedValue(initValue.y || 0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      runOnJS(onStart)();
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      const endX = ctx.startX + event.translationX;
      const endY = ctx.startY + event.translationY;
      x.value = endX;
      y.value = endY;
      ctx.endX = endX;
      ctx.endY = endY;
    },
    onEnd: (event, ctx) => {
      if (ctx.endY < minHeight) {
        ctx.endY = minHeight;
        y.value = withSpring(minHeight);
      }
      if (ctx.endY > maxHeight) {
        ctx.endY = maxHeight;
        y.value = withSpring(maxHeight);
      }
      if (ctx.endX < minWidth) {
        ctx.endX = minWidth;
        x.value = withSpring(minWidth);
      }
      if (ctx.endX > maxWidth) {
        ctx.endX = minWidth;
        x.value = withSpring(maxWidth);
      }

      runOnJS(onRelease)({ x: ctx.endX, y: ctx.endY });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        { translateY: y.value },
      ],
    };
  }, [x.value, y.value]);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </PanGestureHandler>
  );
};

export default DraggableView;
