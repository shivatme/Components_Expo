import { Canvas, Circle } from "@shopify/react-native-skia";
import React from "react";
import { View, StyleSheet } from "react-native";

interface CoinProps {}

function Coin(props: CoinProps): JSX.Element {
  const r = 128;
  return (
    // <View style={styles.container}>
    <Canvas style={{ flex: 1 }}>
      <Circle cx={r} cy={r} r={r} color="red" />
    </Canvas>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  coin: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
    borderRadius: 100,
  },
});

export default Coin;
