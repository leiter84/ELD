import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ESN extends Component {
  static navigationOptions = () => {
    return {
      title: "ESN"
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
