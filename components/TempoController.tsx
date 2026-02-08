import { theme } from "@/theme";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface TempoControllerProps {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}

export const TempoController = ({ speed, setSpeed }: TempoControllerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="labelLarge">{`${speed} WPM`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.quaternary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 36,

    borderColor: theme.colors.primaryDimmed,
    borderWidth: 2,
    gap: 12,

    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  text: {
    color: theme.colors.primary,
  },
});
