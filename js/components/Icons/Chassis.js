import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Colors from "../../styles/colorTheme";

export default class Chassis extends Component {
  render() {
    return <Icon size={50} name="truck" color={Colors.themeDarker} />;
  }
}
