import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as Colors from "../../styles/colorTheme";

export default class WiFi extends Component {
  render() {
    return (
      <Icon size={20} name="wifi" color={Colors.neutralPrimary} />
    );
  }
}
