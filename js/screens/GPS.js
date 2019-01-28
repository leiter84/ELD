import React, { Component } from "react";
import { View } from "react-native";

import * as Common from "../components/Common";
import { styles } from "../styles";

export default class GPS extends Component {
  static navigationOptions = () => {
    return {
      title: "GPS"
    };
  };

  render() {
    const { callAPI } = this.props.navigation.state.params;
    return (
      <View style={[styles.flexItem, styles.flexAlignCenter]}>
        <Common.SyncButton onPress={callAPI} />
      </View>
    );
  }
}
