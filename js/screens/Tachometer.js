import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Tachometer extends Component {
  static navigationOptions = () => {
    return {
      title: "Hours of Service"
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
