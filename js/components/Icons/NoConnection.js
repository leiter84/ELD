import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as Colors from "../../styles/colorTheme";

export default class NoConnection extends Component {
  render() {
    return (
      <Icon
        size={30}
        name="signal-off"
        color={Colors.neutralPrimary}
      />
    );
  }
}
