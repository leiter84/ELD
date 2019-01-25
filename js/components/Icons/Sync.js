import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Colors from "../../styles/colorTheme";

export default class Sync extends Component {
  render() {
    return <Icon size={30} name="sync" color={Colors.themeDarker} />;
  }
}
