import React from "react";
import { View, StyleSheet } from "react-native";
import Emoji from "../components/MorphingEmoji";
import FlatlistAnime from "../components/FlatlistAnimations";
import ParallaxCarousel from "../components/Parallax Carousel";
import Chrome from "../components/Chrome";

interface HomeScreenProps {}

function HomeScreen(props: HomeScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Chrome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;
