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

export default class VerificationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocusInput1: false,
      hasFocusInput2: false,
      hasFocusInput3: false,
      hasFocusInput4: false,
      timer: null,
      minutes_Counter: "01",
      seconds_Counter: "00"
    };
  }
  backClick = () => {
    clearInterval(this.state.timer);
    this.props.navigation.pop();
  };
  onButtonStart = () => {
    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) - 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 0) {
        count = (Number(this.state.minutes_Counter) - 1).toString();
        num = "59";
      }
      this.setState({
        minutes_Counter: count.length == 1 ? "0" + count : count,
        seconds_Counter: num.length == 1 ? "0" + num : num
      });
      if (this.state.seconds_Counter == "00") {
        clearInterval(this.state.timer);
      }
    }, 1000);
    this.setState({ timer });
  };

  verifyCode = () => {
    clearInterval(this.state.timer);
    if (global.IsGoogleLogin == true) {
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("TellUs");
    }
  };

  componentDidMount() {
    this.onButtonStart();
  }

  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <HeaderView IsShowBack={true} onClick={() => this.backClick()} />
        <Text style={styles.headerText}>Phone Verification</Text>
        <Text style={styles.headerSubText}>
          We have send you an OTP code via SMS, Please enter below
        </Text>
        <View style={styles.fotterStyle}>
          <View style={styles.verificationContainer}>
            <TextInput
              style={
                this.state.hasFocusInput1
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              ref="code_1"
              onFocus={this.setFocus.bind(this, true, 1)}
              onBlur={this.setFocus.bind(this, false, 1)}
              placeholder="*"
              secureTextEntry={true}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={value => {
                this.setState({ value });
                if (value) this.refs.code_2.focus(); //assumption is TextInput ref is input_2
              }}
            />
            <TextInput
              style={
                this.state.hasFocusInput2
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              ref="code_2"
              onFocus={this.setFocus.bind(this, true, 2)}
              onBlur={this.setFocus.bind(this, false, 2)}
              placeholder="*"
              secureTextEntry={true}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={value => {
                this.setState({ value });
                if (value) this.refs.code_3.focus(); //assumption is TextInput ref is input_2
              }}
            />
            <TextInput
              style={
                this.state.hasFocusInput3
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 3)}
              onBlur={this.setFocus.bind(this, false, 3)}
              placeholder="*"
              secureTextEntry={true}
              keyboardType="numeric"
              maxLength={1}
              ref="code_3"
              onChangeText={value => {
                this.setState({ value });
                if (value) this.refs.code_4.focus(); //assumption is TextInput ref is input_2
              }}
            />
            <TextInput
              style={
                this.state.hasFocusInput4
                  ? styles.OnFocusInput
                  : styles.textInputStyle
              }
              onFocus={this.setFocus.bind(this, true, 4)}
              onBlur={this.setFocus.bind(this, false, 4)}
              placeholder="*"
              secureTextEntry={true}
              keyboardType="numeric"
              maxLength={1}
              ref="code_4"
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.verifyCode()}
          >
            <Text style={styles.btnTitleStyle}>VERIFY NOW</Text>
          </TouchableOpacity>
          <View style={styles.footerControl}>
            <TouchableOpacity
              style={styles.bottomButtonStyle}
              activeOpacity={0.5}
            >
              <Text style={styles.footerTextBtn}> Resend </Text>
            </TouchableOpacity>
            <View style={styles.Seperator} />
            <TouchableOpacity
              style={styles.bottomButtonStyle}
              activeOpacity={0.5}
            >
              <Text style={styles.footerTextBtn}> Call Me</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.timerStyle}>
            {this.state.minutes_Counter}:{this.state.seconds_Counter}
          </Text>
        </View>
      </View>
    );
  }
  setFocus(hasFocus, index) {
    if (index == 1) {
      this.setState({ hasFocusInput1: hasFocus });
    } else if (index == 2) {
      this.setState({ hasFocusInput2: hasFocus });
    } else if (index == 3) {
      this.setState({ hasFocusInput3: hasFocus });
    } else if (index == 4) {
      this.setState({ hasFocusInput4: hasFocus });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff", //"#F7FBFE",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center"
  },
  timerStyle: {
    color: "gray",
    fontSize: 17,
    marginTop: 50
  },
  backImageStyle: {
    width: 30,
    height: 20,
    marginLeft: 20,
    marginTop: 20
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    flex: 0,
    marginTop: "2%",
    height: 30
  },
  headerSubText: {
    textAlign: "center",
    fontSize: 13,
    color: "gray",
    flex: 0,
    marginTop: 5,
    width: (Dimensions.get("window").width * 90) / 100,
    flexWrap: "wrap"
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
    textAlign: "center",
    height: (Dimensions.get("window").height * 7) / 100,
    width: Dimensions.get("window").width / 5.5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    fontSize: 20
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
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomButtonStyle: {
    borderRadius: 30,
    backgroundColor: "#0F66FF",
    textAlign: "center",
    height: (Dimensions.get("window").height * 7) / 100,
    width: Dimensions.get("window").width / 3,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  btnTitleStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },

  headerStyle: {
    position: "absolute",
    top: "6%",
    left: "2%"
  },
  verificationContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 10
  },
  fotterStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  footerControl: {
    justifyContent: "space-around",
    flex: 0,
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    alignItems: "center",
    width: Dimensions.get("window").width - 40,
    height: 40
  },
  footerTextBtn: {
    color: "white",
    fontWeight: "bold"
  },
  Seperator: {
    width: Dimensions.get("window").width / 3,
    height: 20
  },
  OnFocusInput: {
    textAlign: "center",
    height: (Dimensions.get("window").height * 7) / 100,
    width: Dimensions.get("window").width / 5.5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: "#1F99FF"
  }
});
