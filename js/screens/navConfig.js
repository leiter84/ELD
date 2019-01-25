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
      screen: Main,
      navigationOptions
    },
    Diagnostics: { screen: Screens.Diagnostics, navigationOptions },
    ESN: { screen: Screens.ESN, navigationOptions },
    GPS: { screen: Screens.GPS, navigationOptions },
    Tachometer: { screen: Screens.Tachometer, navigationOptions },
    Odometer: { screen: Screens.Odometer, navigationOptions },
    VIN: { screen: Screens.VIN, navigationOptions }
  },
  {
    initialRouteName: "Main"
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
