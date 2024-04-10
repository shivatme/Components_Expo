import { Canvas, Drawing, Skia, useImage } from "@shopify/react-native-skia";
import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { makeImageParticles } from "./utils";

interface ImageProps {}

const FRICTION = 0.88;
const MOVE_SPEED = 0.88;
// const width = 400;
// const height = 800;

const { width, height } = Dimensions.get("screen");

function Image(props: ImageProps): JSX.Element {
  //   const { width, height } = useWindowDimensions();

  const image = useImage(
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711319003~exp=1711319603~hmac=23d4af02f5963653e9bf15d88e3193f9e762ec46311e29b3f684b38009eaf45e"
  );

  const particles = makeImageParticles(image, 35, 15, width, height);
  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: width,
          height: width,
        }}
      >
        <Drawing
          drawing={({ canvas }) => {
            canvas.clear(Skia.Color("black"));

            for (let i = 0; i < particles.length; i++) {
              const particle = particles[i];
              particle.x += (particle.savedX - particle.x) * MOVE_SPEED;
              particle.y += (particle.savedY - particle.y) * MOVE_SPEED;

              particle.vx *= FRICTION;
              particle.vy *= FRICTION;

              particle.x += particle.vx;
              particle.y = particle.vy;

              canvas.save();
              canvas.translate(particle.x, particle.y);
              canvas.drawPicture(particle.picture);
              canvas.restore();
            }
          }}
        />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});

export default Image;
