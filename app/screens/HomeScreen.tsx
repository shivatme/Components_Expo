import React from "react";
import { View, StyleSheet } from "react-native";
import Phones from "../components/MorphingEmoji/Phones";
import FlatlistAnime from "../components/FlatlistAnimations";

interface HomeScreenProps {}

function HomeScreen(props: HomeScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <FlatlistAnime />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;
