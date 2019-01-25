import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Main from "./Main";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main
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
