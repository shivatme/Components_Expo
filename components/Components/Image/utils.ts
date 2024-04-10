import {
  ClipOp,
  SkImage,
  SkPicture,
  Skia,
  createPicture,
  rect,
} from "@shopify/react-native-skia";

type IParticles = {
  x: number;
  y: number;
  savedX: number;
  savedY: number;
  vx: number;
  vy: number;
  picture: SkPicture;
};

export const makeImageParticles = (
  image: SkImage,
  density: number,
  size: number,
  width: number,
  height: number
) => {
  const result: IParticles[] = [];
  const paint = Skia.Paint();

  for (let x = 0; x < width; x += density) {
    for (let y = 0; y < height; y += density) {
      const picture = createPicture(rect(0, 0, density, density), (canvas) => {
        canvas.translate(-x, -y);
        const clipPath = Skia.Path.Make();
        clipPath.addCircle(x, y, size);

        canvas.clipPath(clipPath, ClipOp.Intersect, true);
        canvas.drawImageRect(
          image,
          rect(0, 0, image.width(), image.height()),
          rect(0, 0, width, height),
          paint
        );
      });
      result.push({
        x: x,
        y: y,
        savedX: x,
        savedY: y,
        vx: 0,
        vy: 0,
        picture,
      });
    }
  }
  return result;
};
