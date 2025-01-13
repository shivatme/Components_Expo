import { View, Text } from "react-native";
import React, { useMemo } from "react";
import {
  BackdropBlur,
  BlurMask,
  Group,
  Path,
  rect,
  RoundedRect,
  rrect,
  Skia,
} from "@shopify/react-native-skia";
import { useDerivedValue } from "react-native-reanimated";

export const CardHeight = 200;
export const CardWidth = 300;

const BlurCard = ({ blur }) => {
  const clipPath = useMemo(() => {
    const skPath = Skia.Path.Make();
    skPath.addRRect(rrect(rect(0, 0, CardWidth, CardHeight), 20, 20));
    return skPath;
  });
  const rBlur = useDerivedValue(() => {
    return blur.value * 5;
  });
  return (
    <Group>
      <Path path={clipPath} color="rgba(255,255,255,0.08)" />
      <Path path={clipPath} color="rgba(255,255,255,0.4)" style={"stroke"} />
      {/* <RoundedRect
        x={0}
        y={0}
        width={CardWidth}
        height={CardHeight}
        r={20}
        color="rgba(255,255,255,0.15)"
      /> */}
      <BackdropBlur blur={rBlur} clip={clipPath} />
    </Group>
  );
};

export default BlurCard;
