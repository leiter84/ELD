import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Diagnostics"
    };
  };

  render() {
    return (
      <View>
        <Text>content goes here</Text>
      </View>
    );
  }
}
