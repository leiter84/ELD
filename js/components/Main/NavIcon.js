import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "../../styles";

export default class NavIcon extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    children: PropTypes.element
  };

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.flexColumn,
          styles.flexCenter,
          styles.flexJustifyAround,
          styles.box(130, 100)
        ]}
        onPress={this.props.onPress}
      >
        {this.props.children}
        <Text style={[styles.fontDarker, styles.fontBigger]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
