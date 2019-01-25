import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = () => {
    return {
      title: "ELD"
    };
  };

  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
