import React, { Component } from "react";
import { View } from "react-native";

import * as Common from "../components/Common";
import { styles } from "../styles";

export default class ESN extends Component {
  static navigationOptions = () => {
    return {
      title: "ESN"
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
