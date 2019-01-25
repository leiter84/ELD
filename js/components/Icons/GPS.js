import React, { Component } from "react";
import Icon from "react-native-vector-icons/Entypo";

import * as Colors from "../../styles/colorTheme";

export default class GPS extends Component {
  render() {
    return (
      <Icon size={50} name="location" color={Colors.themeDarker} />
    );
  }
}
