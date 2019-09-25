import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import PropTypes from "prop-types";

export class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsShowBack: false
    };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? (Dimensions.get("window").height * 25) / 100
                : (Dimensions.get("window").height * 23) / 100,
            alignItems: "center"
          }}
        >
          <Image
            style={styles.imageStyle}
            source={require("../Images/top_bg.png")}
          />
          <Image
            source={require("../Images/e_icon.png")}
            style={{
              position: "absolute",
              top: (Dimensions.get("window").height * 6) / 100,
              resizeMode: "contain",
              width: (Dimensions.get("window").width * 20) / 100,
              height: (Dimensions.get("window").height * 20) / 100
            }}
          />
          {this.props.IsShowBack ? (
            <View style={[styles.headerStyle]}>
              <TouchableOpacity onPress={() => this.props.onClick()}>
                <Image
                  style={styles.backImageStyle}
                  source={require("../Images/sign_up/back_arw.png")}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

HeaderView.PropTypes = {
  IsShowBack: PropTypes.bool,
  onClick: PropTypes.func
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },

  backImageStyle: {
    width: 30,
    height: 20,
    marginLeft: 20,
    marginTop: 25
  },
  headerStyle: {
    position: "absolute",
    top: "6%",
    left: "2%"
  },
  imageStyle: {
    width: Dimensions.get("window").width,
    height: "100%",
    marginTop: 0,
    resizeMode: "stretch"
  }
});
