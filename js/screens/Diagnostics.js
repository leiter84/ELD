import React, { Component } from "react";
import { View } from "react-native";

import * as Common from "../components/Common";
import { styles } from "../styles";

export default class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Diagnostics"
    };
  };

  render() {
    return (
      <View style={[styles.flexItem, styles.flexAlignCenter]}>
        <Common.SyncButton />
      </View>
    );
  }
}
