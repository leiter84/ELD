import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Colors from "../../styles/colorTheme";

export default class Menu extends Component {
  render() {
    return <Icon size={24} name="cog" color={Colors.themeLighter} />;
  }
}
