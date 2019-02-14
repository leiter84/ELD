import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Colors from "../../styles/colorTheme";

export default class Tachometer extends Component {
  render() {
    return (
      <Icon
        size={50}
        name="tachometer-alt"
        color={Colors.themeDarker}
      />
    );
  }
}
