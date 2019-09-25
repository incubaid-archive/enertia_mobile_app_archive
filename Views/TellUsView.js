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

import { HeaderView } from "../CustomViews/HeaderView";
export default class TellUsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSelectCountry: false,
      hasePhoneNumber: false
    };
  }

  componentWillMount() {
    global.IsGoogleLogin = false;
  }

  render() {
    let data = [
      {
        value: "Dubai"
      }
    ];
    return (
      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollview, { alwaysBounceVertical: false }]}
        >
          <HeaderView
            IsShowBack={true}
            onClick={() => this.props.navigation.pop()}
          />
          <View
            style={{
              height: (Dimensions.get("window").height * 60) / 100
            }}
          >
            <Text style={styles.headerText}>Tell us who you are?</Text>
            <TextInput
              style={
                this.state.hasSelectCountry
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 1)}
              onBlur={this.setFocus.bind(this, false, 1)}
              placeholder="Full Name"
            />

            <TextInput
              style={
                this.state.hasePhoneNumber
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 2)}
              onBlur={this.setFocus.bind(this, false, 2)}
              keyboardType="email-address"
              placeholder="Email Address"
            />
            <View style={styles.tcStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image
                  style={styles.tcImageStyle}
                  source={require("../Images/sign_up/radioCheck.png")}
                />
              </TouchableOpacity>
              <Text style={styles.tcTextStyle}>
                I have read and agreed to the terms of use and privacy policy
              </Text>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <View
                style={{
                  alignItems: "center",
                  flex: 0,
                  flexDirection: "row"
                }}
              >
                <Text style={styles.btnTitleStyle}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.footerStyle}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text
                style={[
                  styles.footerTextMsg,
                  {
                    color: "white"
                  }
                ]}
              >
                Over 1 Million Charging Locations
              </Text>
            </TouchableOpacity>
            <View style={styles.subFooter}>
              <Text style={styles.footerTextMsg}>Smart</Text>
              <View style={styles.verticalSeperator} />
              <Text style={styles.footerTextMsg}>Secure</Text>
              <View style={styles.verticalSeperator} />
              <Text style={styles.footerTextMsg}>Scalable</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  setFocus(hasFocus, index) {
    if (index == 1) {
      this.setState({ hasSelectCountry: hasFocus });
    } else if (index == 2) {
      this.setState({ hasePhoneNumber: hasFocus });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff", //"#F7FBFE",
    width: Dimensions.get("window").width,
    height: "100%"
  },
  scrollview: {
    width: "100%",
    height: "100%"
  },

  backImageStyle: {
    width: 30,
    height: 20,
    marginLeft: 20,
    marginTop: 20
  },
  tcImageStyle: {
    width: 15,
    height: 15,
    marginLeft: 20,
    marginRight: 10
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    flex: 0,
    marginTop: "5%",
    height: 30
  },
  subFooter: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#1F99FF",
    fontWeight: "bold",
    marginTop: 10,
    width: Dimensions.get("window").width
  },
  headerSubText: {
    textAlign: "center",
    fontSize: 13,
    color: "gray",
    marginTop: 10,
    height: 30,
    textAlignVertical: "center"
  },
  footerText: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    marginBottom: 20,
    height: 30,
    textAlignVertical: "center"
  },

  textInputStyle: {
    textAlign: "left",
    height: "13%",
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },

  imageStyle: {
    width: Dimensions.get("window").width,
    height: "100%",
    marginTop: 0,
    resizeMode: "stretch"
  },
  buttonStyle: {
    borderRadius: 30,
    backgroundColor: "#1F99FF",
    textAlign: "center",
    height: "12%",
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  btnTitleStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  seperatorStyle: {
    backgroundColor: "lightgray",
    height: 1,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  OrTextStyle: {
    position: "absolute",
    backgroundColor: "#F7FBFE",
    color: "gray",
    fontSize: 12,
    width: 40,
    height: 20,
    textAlign: "center"
  },
  seperatorContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0
  },
  footerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#000",

    width: "100%",
    height: (Dimensions.get("window").height * 15) / 100
  },
  footerTextMsg: {
    color: "#1F99FF",
    fontWeight: "bold",
    fontSize: 14
  },
  footerTextBtn: {
    color: "#1F99FF",
    fontWeight: "bold",
    marginTop: 10
  },
  headerStyle: {
    position: "absolute",
    top: "6%",
    left: "2%"
  },
  backImageStyle: {
    width: 30,
    height: 20,
    marginLeft: 20,
    marginTop: 20
  },
  OnFocusInput: {
    textAlign: "left",
    height: "13%",
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1F99FF"
  },
  verticalSeperator: {
    backgroundColor: "#1F99FF",
    height: 20,
    width: 2,
    marginRight: 10,
    marginLeft: 10
  },
  tcStyle: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "center"
  },
  tcTextStyle: {
    color: "#000",
    width:
      Dimensions.get("window").width -
      (Dimensions.get("window").width * 20) / 100,
    flexWrap: "wrap",
    fontSize: 13
  },
  OnFocusInput: {
    textAlign: "left",
    height: "13%",
    width: Dimensions.get("window").width - 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1F99FF"
  }
});
