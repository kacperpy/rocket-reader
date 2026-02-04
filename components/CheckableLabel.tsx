import { theme } from "@/theme";
import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

interface CheckableLabelProps {
  checked: boolean;
  label: string;
  subLabel: string;
  iconLeft: ReactElement;
}

export const CheckableLabel = ({
  checked,
  label,
  subLabel,
  iconLeft,
}: CheckableLabelProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{iconLeft}</View>

      <View style={styles.textContainer}>
        <Text variant="labelLarge" style={styles.label}>
          {label}
        </Text>

        <Text variant="bodySmall" style={styles.subLabel}>
          {subLabel}
        </Text>
      </View>

      <RadioButton.Android
        value={label}
        status={checked ? "checked" : "unchecked"}
        color={theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontWeight: "600",
    color: theme.colors.textPrimary,
  },
  subLabel: {
    marginTop: 2,
    color: theme.colors.textSecondary,
  },
});
