import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "../utils/colors";
import LottieView from "lottie-react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.outerContainer}>
      <LottieView
        source={require("../assets/green top.json")}
        autoPlay
        loop
        style={styles.animation}
      />
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

        <LottieView
          source={require("../assets/peaceful2.json")}
          autoPlay
          loop
          style={{
            width: "100%",
            height: 400,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    //backgroundColor: colors.background,
  },
  animation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 700,
    zIndex: -1, // Push the animation to the background
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
