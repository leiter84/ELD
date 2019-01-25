import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { styles } from "../../styles";

export default class NavIcon extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element
  };

  render() {
    return (
      <View
        style={[
          styles.flexColumn,
          styles.flexCenter,
          styles.flexJustifyAround,
          styles.box(130)
        ]}
      >
        {this.props.children}
        <Text style={[styles.fontDarker, styles.fontBigger]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
