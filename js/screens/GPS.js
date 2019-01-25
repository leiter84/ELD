import React, { Component } from "react";
import { View, Text } from "react-native";

export default class GPS extends Component {
  static navigationOptions = () => {
    return {
      title: "GPS"
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
