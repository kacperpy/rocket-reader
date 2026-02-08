import { MD3DarkTheme, configureFonts } from "react-native-paper";

export const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: "#121022",
    primary: "#3b2bee",
    primaryDimmed: "#1d1670",
    secondary: "#1a1832",
    tertiary: "#373267",
    quaternary: "#120d3d",
    textPrimary: "#f6f6f8",
    textSecondary: "#94a3b8",
  },
  fonts: configureFonts({
    config: {
      displayLarge: {
        fontFamily: "Lexend_400Regular",
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
        fontWeight: "400",
      },
      displayMedium: {
        fontFamily: "Lexend_400Regular",
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
        fontWeight: "400",
      },
      displaySmall: {
        fontFamily: "Lexend_400Regular",
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
        fontWeight: "400",
      },

      headlineLarge: {
        fontFamily: "Lexend_600SemiBold",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -1,
        fontWeight: "600",
      },
      headlineMedium: {
        fontFamily: "Lexend_600SemiBold",
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
        fontWeight: "600",
      },
      headlineSmall: {
        fontFamily: "Lexend_600SemiBold",
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
        fontWeight: "600",
      },

      titleLarge: {
        fontFamily: "Lexend_600SemiBold",
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
        fontWeight: "600",
      },
      titleMedium: {
        fontFamily: "Lexend_500Medium",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        fontWeight: "500",
      },
      titleSmall: {
        fontFamily: "Lexend_500Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: "500",
      },

      bodyLarge: {
        fontFamily: "Lexend_400Regular",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontWeight: "400",
      },
      bodyMedium: {
        fontFamily: "Lexend_400Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400",
      },
      bodySmall: {
        fontFamily: "Lexend_400Regular",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        fontWeight: "400",
      },

      labelLarge: {
        fontFamily: "Lexend_500Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: "500",
      },
      labelMedium: {
        fontFamily: "Lexend_500Medium",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: "500",
      },
      labelSmall: {
        fontFamily: "Lexend_500Medium",
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: "500",
      },
    },
  }),
};
