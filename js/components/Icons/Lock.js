import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import * as Colors from "../../styles/colorTheme";

export default class Lock extends Component {
  render() {
    return (
      <Icon size={20} name="lock" color={Colors.neutralPrimary} />
    );
  }
}
