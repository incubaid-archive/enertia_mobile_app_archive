import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./LoginView";
import SignUp from "./SignUpView";
import Home from "./HomeView";
import Verify from "./VerificationView";
import Splash from "./SplashView";
import Welcome from "./WelcomeView";
import TellUs from "./TellUsView";
const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Verify: {
    screen: Verify,
    navigationOptions: {
      header: null
    }
  },
  TellUs: {
    screen: TellUs,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

const Container = createAppContainer(AppNavigator);
export default Container;
