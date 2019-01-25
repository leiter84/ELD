import React, { Component } from "react";
import { View } from "react-native";

import * as Common from "../components/Common";
import { styles } from "../styles";

export default class VIN extends Component {
  static navigationOptions = () => {
    return {
      title: "VIN"
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
