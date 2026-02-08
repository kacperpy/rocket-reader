import { DottedBackground } from "@/components/DottedBackground";
import PausableText from "@/components/PausableText";
import { TempoController } from "@/components/TempoController";
import { demoText } from "@/constants/demo";
import { theme } from "@/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DemoScreen() {
  const [wordIndex, setWordIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);

  const moveIndexBySeconds = (numberOfSeconds: number) => {
    setWordIndex((prevIndex) => {
      const wordsPerSecond = speed / 60;
      const wordDelta = Math.round(wordsPerSecond * numberOfSeconds);

      return Math.max(0, prevIndex + wordDelta);
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <DottedBackground color={theme.colors.tertiary} />
        <TempoController speed={speed} setSpeed={setSpeed} />
        <TouchableRipple
          onPress={() => setPlaying((prev) => !prev)}
          rippleColor="transparent"
        >
          <View style={styles.textContainer}>
            <PausableText
              key={wordIndex}
              text={demoText}
              speed={speed}
              playing={playing}
              startFrom={wordIndex}
              currentWordIndex={wordIndex}
              setCurrentWordIndex={setWordIndex}
            />
          </View>
        </TouchableRipple>
        <View style={styles.controlButtonsContainer}>
          <TouchableRipple
            rippleColor="transparent"
            onPress={() => moveIndexBySeconds(-5)}
          >
            <Icon
              source="rewind-5"
              color={theme.colors.textPrimary}
              size={48}
            />
          </TouchableRipple>
          <TouchableRipple
            rippleColor="transparent"
            onPress={() => setPlaying((prev) => !prev)}
          >
            <Icon
              source={playing ? "pause" : "play"}
              color={theme.colors.textPrimary}
              size={86}
            />
          </TouchableRipple>
          <TouchableRipple
            rippleColor="transparent"
            onPress={() => moveIndexBySeconds(5)}
          >
            <Icon
              source="fast-forward-5"
              color={theme.colors.textPrimary}
              size={48}
            />
          </TouchableRipple>
        </View>
        <Button
          style={[styles.buttonPrimary, styles.buttonSecondary]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => setWordIndex(0)}
        >
          Reset
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    gap: 16,
  },
  textContainer: {
    gap: 8,
    paddingVertical: 24,
  },
  header: {
    color: theme.colors.textPrimary,
    textAlign: "center",
    fontWeight: 600,
    fontSize: 80,
    lineHeight: 80,
  },
  subText: {
    textAlign: "center",
    color: theme.colors.textSecondary,
    fontWeight: 500,
  },
  controlButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  buttonPrimary: {
    paddingVertical: 10,
    borderRadius: 18,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colors.textPrimary,
  },
  buttonSecondary: { backgroundColor: theme.colors.secondary },
  tempoControlsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tempoControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.secondary,
    padding: 12,
    borderRadius: 36,
    width: 200,
  },
  tempoText: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colors.textPrimary,
  },
});
