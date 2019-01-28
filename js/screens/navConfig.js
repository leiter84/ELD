import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Main from "./Main";
import * as Screens from "./index";

import * as Colors from "../styles/colorTheme";

const navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.themeDarker,
    color: Colors.themeLighter
  },
  headerTintColor: Colors.themeLighter
};

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Diagnostics: { screen: Screens.Diagnostics },
    ESN: { screen: Screens.ESN },
    GPS: { screen: Screens.GPS },
    Tachometer: { screen: Screens.Tachometer },
    Odometer: { screen: Screens.Odometer },
    VIN: { screen: Screens.VIN }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: navigationOptions
  }
);

const PrimaryNav = createStackNavigator(
  {
    Home: { screen: MainStack }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(PrimaryNav);
