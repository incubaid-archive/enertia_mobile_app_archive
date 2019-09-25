import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { GoogleSignin } from "react-native-google-login";
import { HeaderView } from "../CustomViews/HeaderView";

export default class WelcomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false
    };
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        "554179281917-fgmajrk6rsv4ek9d11bfbuju6l90sect.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    global.GoogleSignInObj = GoogleSignin;
  }

  GoogleSignInClick = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        autoResolve: true,
        showPlayServicesUpdateDialog: true
      })
        .then(() => {
          // play services are available. can now configure library
        })
        .catch(err => {
          console.log("Play services error", err.code, err.message);
        });
      const userInfo = await GoogleSignin.signIn();
      global.IsGoogleLogin = true;
      this.props.navigation.navigate("Login", {
        UserName: userInfo.user.name,
        UserEmail: userInfo.user.email
      });
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        var err = error;
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        var err = error;
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        var err = error;
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  componentWillUnmount() {
    global.IsGoogleLogin = false;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={[styles.scrollview, { alwaysBounceVertical: false }]}
        >
          <HeaderView IsShowBack={false} />
          <View
            style={{
              height: (Dimensions.get("window").height * 54) / 100
            }}
          >
            <Text style={styles.headerText}>Welcome to Enertia</Text>
            <Text style={styles.headerSubText}>Lets get you started!</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <View
                style={{
                  alignItems: "center",
                  flex: 0,
                  flexDirection: "row"
                }}
              >
                <Image
                  style={{
                    width: 15,
                    height: 15
                  }}
                  source={require("../Images/Login_screen/phone_icon.png")}
                />
                <View
                  style={{
                    width: (Dimensions.get("window").width - 40) / 6
                  }}
                />
                <Text style={styles.btnTitleStyle}>Login With Phone</Text>
                <View
                  style={{
                    width: (Dimensions.get("window").width - 40) / 5
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.seperatorContainer}>
              <View style={styles.seperatorStyle} />
              <Text style={styles.OrTextStyle}>OR</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  backgroundColor: "#4285F4"
                }
              ]}
              onPress={() => this.GoogleSignInClick()}
            >
              <View
                style={{
                  alignItems: "center",
                  flex: 0,
                  flexDirection: "row"
                }}
              >
                <Image
                  style={{
                    width: 15,
                    height: 15
                  }}
                  source={require("../Images/Login_screen/google_icon.png")}
                />
                <View
                  style={{
                    width: (Dimensions.get("window").width - 40) / 8
                  }}
                />
                <Text style={styles.btnTitleStyle}>Connect with Google</Text>
                <View
                  style={{
                    width: (Dimensions.get("window").width - 40) / 7
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>Autonomous EV Charging Platform</Text>
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
  setFocus(hasFocus) {
    this.setState({ hasFocus });
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
    fontSize: 18,
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
    fontWeight: "bold",
    fontFamily: "Poppins-Regular"
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
    height: (Dimensions.get("window").height * 16) / 100
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
    marginTop: 50,
    height: "20%"
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
  }
});
