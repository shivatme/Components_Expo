import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {
  Blur,
  Canvas,
  Group,
  RadialGradient,
  Rect,
} from "@shopify/react-native-skia";
import BlurCard, { CardHeight, CardWidth } from "./component/BlurCard";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width: WindowWidth, height: WindowHeight } = Dimensions.get("window");

const BlurCardsScreen = () => {
  const animationProgress = useSharedValue(0);

  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        animationProgress.value = withTiming(1, { duration: 1000 });
      }}
      onTouchEnd={() => {
        animationProgress.value = withTiming(0, { duration: 1000 });
      }}
    >
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={WindowWidth}
          height={WindowHeight}
          color="blue"
        >
          <RadialGradient
            c={{ x: WindowWidth / 2, y: WindowHeight / 2 }}
            r={WindowWidth / 2}
            colors={["violet", "black"]}
          />
          <Blur blur={100} />
        </Rect>
        <Group
          transform={[
            { translateX: WindowWidth / 2 - CardWidth / 2 },
            { translateY: WindowHeight / 2 - CardHeight / 2 },
          ]}
        >
          {new Array(5).fill(0).map((_, i) => {
            const rTransform = useDerivedValue(() => {
              return [
                { rotate: (-Math.PI / 2) * animationProgress.value },
                { translateX: 25 * i * animationProgress.value },
                { perspective: 10000 },
                { rotateY: (Math.PI / 3) * animationProgress.value },
                { rotate: (Math.PI / 4) * animationProgress.value },
              ];
            });

            return (
              <Group
                key={i}
                origin={{ x: CardWidth / 2, y: CardHeight / 2 }}
                transform={rTransform}
              >
                <BlurCard blur={animationProgress} />
              </Group>
            );
          })}
        </Group>
      </Canvas>
    </View>
  );
};

export default BlurCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
