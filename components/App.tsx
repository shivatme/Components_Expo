import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Phones from "./Components/Phones";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Coin from "./Components/New Component/Coin";
import Image from "./Components/Image/Image";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Phones /> */}
        <Image />

        {/* <Coin /> */}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
