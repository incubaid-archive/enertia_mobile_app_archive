/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import AppNav from "./Views/AppNavigation";
import GlobalFont from "react-native-global-font";
const App = () => {
  console.disableYellowBox = true;
  global.IsGoogleLogin = false;
  let fontName = "Poppins-Regular";
  GlobalFont.applyGlobal(fontName);
  return <AppNav />;
};

export default App;
