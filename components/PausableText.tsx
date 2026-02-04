import { theme } from "@/theme";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface PausableTextProps {
  text: string;
  speed?: number;
  playing: boolean;
  startFrom?: number;
  currentWordIndex: number;
  setCurrentWordIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BASE_FONT_SIZE = 52;

export default function PausableText({
  text,
  speed = 400,
  playing,
  startFrom = 0,
  currentWordIndex,
  setCurrentWordIndex,
}: PausableTextProps) {
  const [smallestFontSize, setSmallestFontSize] = useState(BASE_FONT_SIZE);

  const parseWords = (inputText: string) => {
    const tokens: { word: string; pauseMultiplier: number }[] = [];
    const words = inputText.split(/\s+/).filter((word) => word.length > 0);

    words.forEach((word) => {
      let cleanWord = word;
      let pauseMultiplier = 1;

      if (cleanWord.endsWith(".")) {
        pauseMultiplier = 2;
      } else if (cleanWord.endsWith(",")) {
        pauseMultiplier = 1.5;
      }
      cleanWord = cleanWord.replace(/[^\p{L}\p{N}'.,\-]/gu, "");

      if (cleanWord.length > 0) {
        tokens.push({ word: cleanWord, pauseMultiplier });
      }
    });

    return tokens;
  };

  const parsedWords = parseWords(text);
  const currentToken = parsedWords[currentWordIndex] || {
    word: "",
    pauseMultiplier: 1,
  };
  const currentWord = currentToken.word;

  useEffect(() => {
    setCurrentWordIndex(startFrom);
  }, [startFrom]);

  useEffect(() => {
    if (!playing || currentWordIndex >= parsedWords.length) return;

    const baseMillisecondsPerWord = 60000 / speed;
    const millisecondsPerWord =
      baseMillisecondsPerWord * currentToken.pauseMultiplier;

    const timer = setTimeout(() => {
      setCurrentWordIndex((prev) =>
        prev < parsedWords.length - 1 ? prev + 1 : prev,
      );
    }, millisecondsPerWord);

    return () => clearTimeout(timer);
  }, [
    playing,
    currentWordIndex,
    speed,
    parsedWords.length,
    currentToken.pauseMultiplier,
  ]);

  const getHighlightedWord = () => {
    if (!currentWord) return null;

    const middleIndex = Math.floor(currentWord.length / 2);
    const before = currentWord.slice(0, middleIndex);
    const middle = currentWord[middleIndex];
    const after = currentWord.slice(middleIndex + 1);

    return (
      <View style={styles.wordRow}>
        <Text
          style={styles.before}
          numberOfLines={1}
          adjustsFontSizeToFit
          onLayout={(e) => {
            const renderedHeight = e.nativeEvent.layout.height;
            const scale = renderedHeight / BASE_FONT_SIZE;
            const effectiveFontSize = BASE_FONT_SIZE * scale;

            setSmallestFontSize((prev) => Math.min(prev, effectiveFontSize));
          }}
        >
          {before}
        </Text>

        <Text
          style={[styles.focusLetter, { fontSize: smallestFontSize }]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {middle}
        </Text>

        <Text
          style={[styles.after, { fontSize: smallestFontSize }]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {after}
        </Text>
      </View>
    );
  };

  return (
    <>
      {getHighlightedWord()}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${((currentWordIndex + 1) / parsedWords.length) * 100}%`,
            },
          ]}
        />
      </View>
      <Text>{`${currentWordIndex + 1} / ${parsedWords.length}`}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 36,
    height: BASE_FONT_SIZE * 2,
  },

  before: {
    flex: 1,
    textAlign: "right",
    color: theme.colors.textPrimary,
    fontWeight: "600",
    fontSize: BASE_FONT_SIZE,
  },

  focusLetter: {
    textAlign: "center",
    color: theme.colors.primary,
    fontWeight: "700",
  },

  after: {
    flex: 1,
    textAlign: "left",
    color: theme.colors.textPrimary,
    fontWeight: "600",
  },

  progress: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    textAlign: "center",
  },
  progressContainer: {
    width: "100%",
    height: 4,
    backgroundColor: theme.colors.surfaceVariant ?? "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 12,
  },

  progressFill: {
    height: "100%",
    backgroundColor: theme.colors.primary,
  },
});
