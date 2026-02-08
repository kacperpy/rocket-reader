import { CheckableLabel } from "@/components/CheckableLabel";
import { DottedBackground } from "@/components/DottedBackground";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: theme.colors.background }}
    >
      <DottedBackground color={theme.colors.tertiary} />
      <View style={styles.textContainer}>
        <Text variant="headlineLarge" style={styles.header}>
          Read Faster Than Ever
        </Text>
        <Text variant="bodyLarge" style={styles.subText}>
          Experience the power of RSVP technology
        </Text>
      </View>
      <View style={styles.borderedContainer}>
        <Text style={styles.focusHeader} variant="headlineLarge">
          FO
          <Text
            style={[styles.focusHeader, { color: theme.colors.primary }]}
            variant="headlineLarge"
          >
            C
          </Text>
          US
        </Text>
        <View style={styles.subFocusContainer}>
          <View style={styles.line} />
          <Text style={styles.subText} variant="bodyLarge">
            400+ WPM
          </Text>
          <View style={styles.line} />
        </View>
      </View>
      <View>
        <CheckableLabel
          label="400+ WPM speed target"
          subLabel="Break through your reading plateau"
          iconLeft={
            <Icon source="speedometer" color={theme.colors.primary} size={20} />
          }
          checked
        />
        <CheckableLabel
          label="No eye movement"
          subLabel="Eliminate subvocalization and fatigue"
          iconLeft={
            <Icon source="eye-off" color={theme.colors.primary} size={20} />
          }
          checked
        />
        <CheckableLabel
          label="Absorb knowledge faster"
          subLabel="High-focus retention technology"
          iconLeft={
            <Icon source="brain" color={theme.colors.primary} size={20} />
          }
          checked
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonPrimary}
          labelStyle={styles.buttonText}
          mode="contained"
        >
          Start Reading
        </Button>
        <Button
          style={[styles.buttonPrimary, styles.buttonSecondary]}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => router.push("/demo")}
        >
          Try Demo
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    paddingHorizontal: 12,
    gap: 16,
  },
  textContainer: {
    gap: 8,
  },
  header: {
    color: theme.colors.textPrimary,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 42,
  },
  subText: {
    textAlign: "center",
    color: theme.colors.textSecondary,
    fontWeight: 500,
  },
  borderedContainer: {
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 64,
    borderColor: theme.colors.tertiary,
    borderWidth: 2,
    gap: 12,

    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,

    elevation: 12,
  },
  subFocusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  focusHeader: {
    color: theme.colors.textPrimary,
    fontWeight: 800,
    fontSize: 48,
    lineHeight: 48,
    letterSpacing: 4,
  },
  line: {
    height: 4,
    borderRadius: 4,
    width: 48,
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    gap: 8,
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
});
