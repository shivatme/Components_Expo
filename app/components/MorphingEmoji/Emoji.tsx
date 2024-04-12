import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { interpolateColor, useSharedValue } from "react-native-reanimated";
import { interpolatePath, parse } from "react-native-redash";

import {
  Canvas,
  Path as SkiaPath,
  Group,
  Circle,
} from "@shopify/react-native-skia";
import Slider from "@react-native-community/slider";

export default () => {
  const inputRange = [0, 1, 2];
  const [scroll, setScroll] = useState(0);
  const slider = useSharedValue(0);
  const r = 120;

  const mouth = interpolatePath(
    slider.value,
    inputRange,
    mouths.map((mouth) => parse(mouth))
  );
  const leftEye = interpolatePath(
    slider.value,
    inputRange,
    leftEyes.map((eye) => parse(eye))
  );
  const rightEye = interpolatePath(
    slider.value,
    inputRange,
    rightEyes.map((eye) => parse(eye))
  );
  const eyeColor = interpolateColor(slider.value, inputRange, [
    "#664300",
    "#664300",
    "#DE2A42",
  ]);

  useEffect(() => {
    slider.value = scroll;
  }, [scroll]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 250,
          top: 100,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Canvas style={{ flex: 1, width: 250, height: 250 }}>
          <Group>
            <Circle cx={r} cy={r} r={r} color="#FFCD4C" />
            <SkiaPath path={mouth} color={"#664300"} />
            <SkiaPath path={leftEye} color={eyeColor} />
            <SkiaPath path={rightEye} color={eyeColor} />
          </Group>
        </Canvas>
      </View>
      <View
        style={{
          top: 100,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={2}
          minimumTrackTintColor="red"
          maximumTrackTintColor="red"
          onValueChange={(val) => setScroll(val)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  svg: {
    backgroundColor: "#ffffff",
    aspectRatio: 1 / 3,
    alignSelf: "center",
    marginBottom: 200,
    height: 200,
  },
});
const mouths = [
  "M119.5 162.5C145 162.5 159.5 189.5 155 194.5C150.5 199.5 153 188.5 119.5 188.5C86 188.5 87.5002 197 84.0001 194.5C80.5001 192 94.0001 162.5 119.5 162.5Z",
  "M122.501 160C148.001 160 173.001 159.5 173.001 167.5C173.001 175.5 156.001 173 122.501 173C89.0008 173 66.5 175 66.5 167.5C66.5 160 97.0006 160 122.501 160Z",
  "M120.999 145C158.499 145 171.5 138 176 142.5C187.5 154 164.499 198.5 120.999 198.5C77.4995 198.5 54.929 161.5 62 145C66.2855 135 83.5 145 120.999 145Z",
];
const leftEyes = [
  "M48.3939 135.897C52.3939 135.897 61.8939 126.397 75.8939 123.397C89.8939 120.397 99.394 125.896 103.394 123.397C107.394 120.897 88.3939 99.3966 68.3939 104.897C48.3939 110.397 44.3939 135.897 48.3939 135.897Z",
  "M60.4997 109.5C60.5744 123 64.9997 132.5 76.9996 132.5C88.9996 132.5 92.4998 124.5 92.4997 112C92.4996 99.5 86.9998 87 76.9996 87C66.9995 87 60.4249 96 60.4997 109.5Z",
  "M10.3812 33.1735C-0.61879 51.1735 4.38095 95.6736 81.3809 107.174C125.381 63.1733 117.381 18.1732 97.3811 7.67327C77.3814 -2.82666 57.8813 11.1733 53.3809 24.6736C47.3812 20.6735 21.3812 15.1736 10.3812 33.1735Z",
];
const rightEyes = [
  "M192 135.5C188 135.5 178.5 126 164.5 123C150.5 120 141 125.5 137 123C133 120.5 152 99.0001 172 104.5C192 110 196 135.5 192 135.5Z",
  "M179.5 109.5C179.575 123 174.963 133.5 164 133.5C153.037 133.5 147 122 147 109.5C147 97 153.5 87 164 87C174.5 87 179.425 96 179.5 109.5Z",
  "M230 32.5002C241 50.5002 236 95.0003 159 106.5C115 62.5 123 17.4999 143 6.99994C163 -3.5 182.5 10.5 187 24.0002C193 20.0002 219 14.5002 230 32.5002Z",
];
