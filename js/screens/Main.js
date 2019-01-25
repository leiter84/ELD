import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default class Main extends Component {
  static navigationOptions = () => {
    return {
      title: "ELD"
    };
  };

  render() {
    return (
      <View style={[styles.flexItem, styles.flexColumn]}>
        <Text style={[styles.flexItem]}>Hello world!</Text>
        <Text style={[styles.flexItem]}>Hello world!</Text>
      </View>
    );
  }
}
