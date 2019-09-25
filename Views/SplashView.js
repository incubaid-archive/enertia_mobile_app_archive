import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from "react-native";

export default class VerificationView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgStyle}
          source={require("../Images/splash/bg.png")}
        />
        <Image
          style={styles.logoStyle}
          source={require("../Images/splash/logo_with_name.png")}
        />
        <Image
          style={styles.loadderLogoStyle}
          source={require("../Images/splash/loader_gif.gif")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    flex: 0
  },
  bgStyle: {
    width: "100%",
    height: "100%"
  },
  logoStyle: {
    width: (Dimensions.get("window").width * 30) / 100,
    height: (Dimensions.get("window").width * 30) / 100,
    position: "absolute",
    top: 80
  },
  loadderLogoStyle: {
    width: (Dimensions.get("window").width * 30) / 100,
    height: (Dimensions.get("window").width * 30) / 100,
    position: "absolute",
    bottom: 80
  }
});
