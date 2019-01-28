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

  goScreen = screenName => {
    this.props.navigation.navigate(screenName, {
      callAPI: this.callAPI.bind(this)
    });
  };

  goDiagnostics = () => {
    this.goScreen("Diagnostics");
  };

  goESN = () => {
    this.goScreen("ESN");
  };

  goGPS = () => {
    this.goScreen("GPS");
  };

  goTachometer = () => {
    this.goScreen("Tachometer");
  };

  goOdometer = () => {
    this.goScreen("Odometer");
  };

  goVIN = () => {
    this.goScreen("VIN");
  };

  callAPI = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve({}), 5000);
    });
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
        <MainScreenComponents.NavIcon
          text="Diagnostics"
          onPress={this.goDiagnostics}
        >
          <Icons.Diagnostics />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="ESN" onPress={this.goESN}>
          <Icons.ESN />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="GPS" onPress={this.goGPS}>
          <Icons.GPS />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon
          text="Hours of Service"
          onPress={this.goTachometer}
        >
          <Icons.Tachometer />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon
          text="Odometer"
          onPress={this.goOdometer}
        >
          <Icons.Odometer />
        </MainScreenComponents.NavIcon>
        <MainScreenComponents.NavIcon text="VIN" onPress={this.goVIN}>
          <Icons.VIN />
        </MainScreenComponents.NavIcon>
      </View>
    );
  }
}
