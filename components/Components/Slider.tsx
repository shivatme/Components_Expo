import { View, StyleSheet, Text, Dimensions } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
// import { onScroll } from "react-native-redash";
import { Phone } from "./Phones";

interface SliderProps {
  // path: Phone[];
  slider: SharedValue<number>;
  onScroll: any;
}

const { width } = Dimensions.get("window");
export const SEGMENT_WIDTH = width / 2;

export default ({ path, slider: x, onScroll }: SliderProps) => {
  return (
    <View
      style={{
        bottom: 50,
        left: 100,
        width: SEGMENT_WIDTH,
        // backgroundColor: "red",
        justifyContent: "center",
      }}
    >
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => onScroll(e.nativeEvent.contentOffset.x)}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {path.map((_, index) => {
          const year = `${1990 + index * 5}`;
          return (
            <View key={year} style={styles.container}>
              <View style={styles.dents}>
                <View style={styles.firstDent} />
                <View style={styles.smallDent} />

                <View style={styles.bigDent} />
              </View>
              <View style={styles.year}>
                <Text>{year}</Text>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SEGMENT_WIDTH,
    // top: 50,
  },
  dents: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstDent: {
    backgroundColor: "transparent",
    width: 5,
    height: 35,
  },
  smallDent: {
    backgroundColor: "black",
    width: 5,
    height: 35,
  },
  bigDent: {
    backgroundColor: "black",
    width: 10,
    height: 70,
  },
  year: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
