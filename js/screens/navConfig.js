import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Main from "./Main";

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
    }
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
