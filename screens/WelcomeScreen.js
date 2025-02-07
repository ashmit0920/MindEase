import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../utils/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to <Text style={{ color: colors.primary }}>MindEase</Text>
      </Text>
      <Text style={styles.subtitle}>
        Your journey to stress-free learning starts here.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: colors.buttonText,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
