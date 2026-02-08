import { View, useWindowDimensions } from "react-native";

export const DottedBackground = ({ color }: { color: string }) => {
  const { width, height } = useWindowDimensions();
  const spacing = 50;
  const dotSize = 3;

  const dots = [];
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      dots.push(
        <View
          key={`${x}-${y}`}
          style={{
            position: "absolute",
            left: x,
            top: y,
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: color,
            opacity: 0.2,
          }}
        />,
      );
    }
  }

  return <View style={{ position: "absolute", width, height }}>{dots}</View>;
};
