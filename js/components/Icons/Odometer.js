import React, { Component } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import * as Colors from "../../styles/colorTheme";

export default class ESN extends Component {
  render() {
    return (
      <Icon size={50} name="dashboard" color={Colors.themeDarker} />
    );
  }
}
