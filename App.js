import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Canvas, LinearGradient, Rect } from "@shopify/react-native-skia";

export default function App() {
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} height={200} width={200}>
        <LinearGradient start={vec(0, 0)} end={vec(200, 200)} />
        {/* color={["red", "green"]} */}
      </Rect>
    </Canvas>
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
