import React, { Component } from "react";
import { TouchableHighlight } from "react-native";

import * as Icons from "../Icons";
import { styles } from "../../styles";

export default class Settings extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[styles.paddingH20]}
        onPress={() => this.props.navigation.navigate("Settings")}
      >
        <Icons.Settings />
      </TouchableHighlight>
    );
  }
}
