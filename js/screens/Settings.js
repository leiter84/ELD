import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import { styles } from "../styles";

@inject("appState")
@observer
class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Settings"
    };
  };

  static propTypes = {
    appState: PropTypes.any
  };

  render() {
    return (
      <View style={[styles.flexItem, styles.flexAlignCenter]}>
        <Text>Settings page</Text>
      </View>
    );
  }
}

export default Diagnostics;
