import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Odometer extends Component {
  static navigationOptions = () => {
    return {
      title: "Odometer"
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
