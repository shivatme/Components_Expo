import React from "react";
import { View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Slider1Props {}
const END_POSITION = 200;
function Slider1(props: Slider1Props): JSX.Element {
  const onLeft = useSharedValue(true);
  const position = useSharedValue(0);

  const panGesture = Gesture.Pan().onUpdate((e) => {
    position.value = e.translationX;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));
  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "grey",
    height: 20,
    width: 200,
    alignSelf: "center",
    top: 100,
  },
  box: {
    height: 20,
    width: 20,
    backgroundColor: "#b58df1",
    borderRadius: 100,
    marginBottom: 30,
  },
});

export default Slider1;
