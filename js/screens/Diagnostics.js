import React, { Component } from "react";
import { View } from "react-native";

import { data } from "../data/logs";

import * as Common from "../components/Common";
import { styles } from "../styles";

export default class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Diagnostics"
    };
  };

  render() {
    const { callAPI } = this.props.navigation.state.params;

    return (
      <View style={[styles.flexItem, styles.flexAlignCenter]}>
        <Common.SyncButton onPress={callAPI} />

        <Common.LogList data={data} />
      </View>
    );
  }
}
