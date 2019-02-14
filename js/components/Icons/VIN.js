import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as Colors from "../../styles/colorTheme";

export default class VIN extends Component {
  render() {
    return (
      <Icon size={50} name="car-battery" color={Colors.themeDarker} />
    );
  }
}
