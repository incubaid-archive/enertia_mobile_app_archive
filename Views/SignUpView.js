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
  Alert
} from "react-native";
import { HeaderView } from "../CustomViews/HeaderView";

export default class SignUpView extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      hasFocusName: false,
      hasFocusPhone: false,
      hasFocusEmail: false,
      Email: navigation.getParam("UserEmail"),
      Name: navigation.getParam("UserName")
    };
  }

  render() {
    let screenWidth = Dimensions.get("window").width;

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.scrollview]}>
          <HeaderView
            IsShowBack={true}
            onClick={() => this.props.navigation.pop()}
          />
          <Text style={styles.headerText}>Great! Almost Done</Text>
          <Text style={styles.headerSubText}>
            Please provide your phone number
          </Text>
          <View
            style={{
              height: (Dimensions.get("window").height * 55) / 100
            }}
          >
            <TextInput
              style={
                this.state.hasFocusName
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 1)}
              onBlur={this.setFocus.bind(this, false, 1)}
              placeholder="Full Name"
              value={this.state.Name}
            />
            <TextInput
              style={
                this.state.hasFocusPhone
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 2)}
              onBlur={this.setFocus.bind(this, false, 2)}
              placeholder="Enter your phone number"
              keyboardType="numeric"
              maxLength={12}
            />
            <TextInput
              style={
                this.state.hasFocusEmail
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 3)}
              onBlur={this.setFocus.bind(this, false, 3)}
              placeholder="Email  Address"
              keyboardType="email-address"
              value={this.state.Email}
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Verify")}
            >
              <Text style={styles.btnTitleStyle}>SIGN UP NOW</Text>
            </TouchableOpacity>
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
          </View>
          <View style={styles.footerStyle}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.footerTextMsg}>Already have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.footerTextBtn}> Login Now! </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  setFocus(hasFocus, index) {
    if (index == 1) {
      this.setState({ hasFocusName: hasFocus });
    } else if (index == 2) {
      this.setState({ hasFocusPhone: hasFocus });
    } else if (index == 3) {
      this.setState({ hasFocusEmail: hasFocus });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FBFE",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center"
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
  scrollview: {
    width: "100%",
    height: "100%"
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    flex: 0,
    marginTop: "1%",
    height: 30
  },
  headerSubText: {
    textAlign: "center",
    fontSize: 13,
    color: "gray",
    flex: 0,
    marginTop: 5,
    height: 30
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
  headerTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 20,
    color: "white",
    marginTop: 70
  },
  headerSubTitle: {
    fontSize: 14,
    marginLeft: 20,
    color: "white",
    marginTop: 10
  },

  textInputStyle: {
    textAlign: "left",
    height: (Dimensions.get("window").height * 7) / 100,
    width: Dimensions.get("window").width - 40,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
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
    height: (Dimensions.get("window").height * 7) / 100,
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
    backgroundColor: "white",
    height: 1,
    width: Dimensions.get("window").width - 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  OrTextStyle: {
    position: "absolute",
    backgroundColor: "#5958FE",
    color: "white",
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
    color: "white",
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
