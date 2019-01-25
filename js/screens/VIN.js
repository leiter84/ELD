import React, { Component } from "react";
import { View, Text } from "react-native";

export default class VIN extends Component {
  static navigationOptions = () => {
    return {
      title: "VIN"
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
