import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import * as Icons from "../Icons";
import { styles } from "../../styles";

export default class SyncButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  };

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.flexRow,
          styles.flexCenter,
          styles.flexJustifyAround,
          styles.box(130, 100)
        ]}
        onPress={this.props.onPress}
      >
        <Icons.Sync />
        <Text style={[styles.fontDarker, styles.fontBigger]}>
          Sync data
        </Text>
      </TouchableOpacity>
    );
  }
}
