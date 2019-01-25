import React, { Component } from "react";
import { View } from "react-native";

import * as MainScreenComponents from "../components/Main";
import * as Icons from "../components/Icons";
import { styles } from "../styles";

export default class Main extends Component {
  static navigationOptions = () => {
    return {
      title: "ELD"
    };
  };

  render() {
    return (
      <View
        style={[
          styles.flexItem,
          styles.flexRow,
          styles.flexWrap,
          styles.flexCenter,
          styles.flexAlignStretch
        ]}
      >
        <MainScreenComponents.NavIcon text="Diagnostics">
          <Icons.Diagnostics />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="ESN">
          <Icons.ESN />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="GPS">
          <Icons.GPS />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="Hours of Service">
          <Icons.Tachometer />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="Odometer">
          <Icons.Odometer />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="VIN">
          <Icons.VIN />
        </MainScreenComponents.NavIcon>
      </View>
    );
  }
}
