import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Easing,
  Animated
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: new Animated.Value(Dimensions.get("window").width),
      IsFullWIdth: false,
      controlHeight: (Dimensions.get("window").width * 13) / 100,
      IsShowControl: "flex",
      MenuIcon: require("../Images/dashboard/Main_menu_btn.png"),
      IsShowSubControl1: "flex",
      IsShowSubControl2: "flex",
      IsShowSubControl3: "flex",
      IsShowSubControl4: "flex",
      topTop: (Dimensions.get("window").height * 10) / 100,
      topleft: 0,
      topright: 0,
      bottomBottom: (Dimensions.get("window").height * -2) / 100,
      bottomleft: 0,
      bottomright: 0,
      IsShowPopControl: false
    };
  }

  componentWillMount() {
    this.setState({
      controlHeight: (Dimensions.get("window").width * 13) / 100
    });
  }

  logout = () => {
    global.IsGoogleLogin = false;
    this.props.navigation.navigate("Welcome");
    global.GoogleSignInObj.signOut();
  };

  toggleWidth() {
    const endWidth = this.state.IsFullWIdth
      ? Dimensions.get("window").width
      : 0;

    this.setState({
      IsShowControl: !this.state.IsFullWIdth ? "none" : "none"
    });
    // this.setState({
    //   IsShowSubControl1: !this.state.IsFullWIdth ? "none" : "none"
    // });
    // this.setState({
    //   IsShowSubControl2: !this.state.IsFullWIdth ? "none" : "none"
    // });
    // this.setState({
    //   IsShowSubControl3: !this.state.IsFullWIdth ? "none" : "none"
    // });
    // this.setState({
    //   IsShowSubControl4: !this.state.IsFullWIdth ? "none" : "none"
    // });
    this.setState({ IsFullWIdth: !this.state.IsFullWIdth });

    Animated.timing(this.state.width, {
      toValue: endWidth,
      duration: 200,
      easing: Easing.linear
    }).start(() => {
      //this.setState({ IsFullWIdth: this.state.IsFullWIdth });
      this.setState({ IsShowPopControl: !this.state.IsShowPopControl });
      this.setState({
        IsShowControl: !this.state.IsFullWIdth ? "flex" : "none"
      });
      this.setState({
        MenuIcon: !this.state.IsFullWIdth
          ? require("../Images/dashboard/Main_menu_btn.png")
          : require("../Images/dashboard/Main_menu_btn_active.png")
      });

      // this.setState({
      //   IsShowSubControl1: !this.state.IsFullWIdth ? "none" : "flex"
      // });
      // this.setState({
      //   IsShowSubControl2: !this.state.IsFullWIdth ? "none" : "flex"
      // });
      // this.setState({
      //   IsShowSubControl3: !this.state.IsFullWIdth ? "none" : "flex"
      // });
      // this.setState({
      //   IsShowSubControl4: !this.state.IsFullWIdth ? "none" : "flex"
      // });

      //--------------
      this.setState({
        topTop: !this.state.IsFullWIdth
          ? (Dimensions.get("window").height * 12) / 100
          : (Dimensions.get("window").height * 22) / 100
      });
      this.setState({
        topleft: !this.state.IsFullWIdth
          ? (Dimensions.get("window").width * 10) / 100
          : (Dimensions.get("window").width * 32) / 100
      });
      this.setState({
        topright: !this.state.IsFullWIdth
          ? (Dimensions.get("window").width * 10) / 100
          : (Dimensions.get("window").width * 32) / 100
      });
      this.setState({
        bottomBottom: !this.state.IsFullWIdth
          ? (Dimensions.get("window").height * 11) / 100
          : (Dimensions.get("window").height * 11) / 100
      });
      this.setState({
        bottomleft: !this.state.IsFullWIdth
          ? (Dimensions.get("window").width * 10) / 100
          : (Dimensions.get("window").width * 18) / 100
      });
      this.setState({
        bottomright: !this.state.IsFullWIdth
          ? (Dimensions.get("window").width * 10) / 100
          : (Dimensions.get("window").width * 18) / 100
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapViewStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          provider={PROVIDER_GOOGLE}
        />

        <SearchBar
          lightTheme
          searchIcon={
            <View>
              <Image
                source={require("../Images/dashboard/car_icon.png")}
                style={{ width: 15, height: 15 }}
              />
            </View>
          }
          placeholder="Where to go from here.."
          lightTheme={true}
          containerStyle={styles.SearchBarStyle}
          inputContainerStyle={styles.SearchBarInputContainerStyle}
        />

        <Animated.View
          style={[
            styles.footerControlViewStyle,
            {
              width: this.state.width,
              height: this.state.controlHeight,
              zIndex: 22
            }
          ]}
        >
          <View style={styles.footerSubControlViewStyle}>
            <TouchableOpacity
              style={{ display: this.state.IsShowControl, zIndex: 1 }}
              onPress={() => this.logout()}
            >
              <Image
                style={styles.controlIconStyle}
                source={require("../Images/dashboard/stations.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ display: this.state.IsShowControl, zIndex: 1 }}
              onPress={() => this.logout()}
            >
              <Image
                style={styles.controlIconStyle}
                source={require("../Images/dashboard/filter.png")}
              />
            </TouchableOpacity>
            <View
              style={{
                width: (Dimensions.get("window").width * 15) / 100
              }}
            />
            <TouchableOpacity
              style={{ display: this.state.IsShowControl, zIndex: 1 }}
              onPress={() => this.logout()}
            >
              <Image
                style={styles.controlIconStyle}
                source={require("../Images/dashboard/faourite.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ display: this.state.IsShowControl, zIndex: 1 }}
              onPress={() => this.logout()}
            >
              <Image
                style={styles.controlIconStyle}
                source={require("../Images/dashboard/gps.png")}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: (Dimensions.get("window").height * 12) / 100,
            zIndex: 23,
            alignItems: "center"
          }}
          onPress={() => this.toggleWidth()}
        >
          <Image
            style={{
              height: (Dimensions.get("window").width * 18) / 100,
              width: (Dimensions.get("window").width * 18) / 100,
              shadowColor: "gray",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.8,
              shadowRadius: 2
            }}
            source={this.state.MenuIcon}
          />
        </TouchableOpacity>

        {this.state.IsShowPopControl ? (
          <TouchableOpacity
            style={[
              styles.subcontrol1,
              {
                //display: this.state.IsShowSubControl1,
                left: this.state.topleft,
                bottom: this.state.topTop,
                zIndex: 20
              }
            ]}
          >
            <Image
              style={styles.popControl}
              source={require("../Images/dashboard/networks.png")}
            />
          </TouchableOpacity>
        ) : null}
        {this.state.IsShowPopControl ? (
          <TouchableOpacity
            style={[
              styles.subcontrol2,
              {
                //display: this.state.IsShowSubControl2,
                right: this.state.topright,
                bottom: this.state.topTop,
                zIndex: 20
              }
            ]}
          >
            <Image
              style={styles.popControl}
              source={require("../Images/dashboard/Payment.png")}
            />
          </TouchableOpacity>
        ) : null}
        {this.state.IsShowPopControl ? (
          <TouchableOpacity
            style={[
              styles.subcontrol3,
              {
                //display: this.state.IsShowSubControl3,
                left: this.state.bottomleft,
                bottom: this.state.bottomBottom,
                zIndex: 20
              }
            ]}
          >
            <Image
              style={styles.popControl}
              source={require("../Images/dashboard/profile.png")}
            />
          </TouchableOpacity>
        ) : null}

        {this.state.IsShowPopControl ? (
          <TouchableOpacity
            style={[
              styles.subcontrol4,
              {
                //display: this.state.IsShowSubControl4,
                right: this.state.bottomright,
                bottom: this.state.bottomBottom,
                zIndex: 20
              }
            ]}
          >
            <Image
              style={styles.popControl}
              source={require("../Images/dashboard/statstics.png")}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff", //"#5958FE",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center"
  },
  FooterMainAnimated: {
    alignItems: "center",
    height: 400,
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
    width: Dimensions.get("window").width
  },

  subcontrol1: {
    position: "absolute"
  },
  subcontrol2: {
    position: "absolute"
  },
  subcontrol3: {
    position: "absolute"
  },
  subcontrol4: {
    position: "absolute"
  },
  footerControlViewStyle: {
    bottom: (Dimensions.get("window").height * 17) / 100
  },
  footerSubControlViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 30,
    height: (Dimensions.get("window").height * 2) / 100,
    alignItems: "center",
    opacity: 0.9,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  mapViewStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  textInputStyle: {
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center",
    height: 50,
    width: Dimensions.get("window").width - 20,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  imageStyle: {
    width: Dimensions.get("window").width,
    height: 200,
    backgroundColor: "#dfdf",
    marginTop: 0
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: "#642AF8",
    textAlign: "center",
    height: 50,
    width: Dimensions.get("window").width - 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
    marginTop: 20
  },
  footerTextMsg: {
    color: "white",
    fontSize: 14
  },
  footerTextBtn: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10
  },
  SearchBarStyle: {
    backgroundColor: "transparent",
    marginTop: 35,
    marginRight: 20,
    marginLeft: 20,
    position: "absolute",
    width: Dimensions.get("window").width - 20,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  SearchBarInputContainerStyle: {
    backgroundColor: "#f5f5f5",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: 50
  },
  controlIconStyle: {
    width: (Dimensions.get("window").width * 5) / 100,
    height: (Dimensions.get("window").width * 5) / 100,
    resizeMode: "contain",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 0
  },
  popControl: {
    width: (Dimensions.get("window").width * 15) / 100,
    height: (Dimensions.get("window").width * 15) / 100
  }
});
