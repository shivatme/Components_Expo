import React from "react";
import { View, StyleSheet } from "react-native";
import Phones from "../components/MorphingEmoji/Phones";

interface HomeScreenProps {}

function HomeScreen(props: HomeScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Phones />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
