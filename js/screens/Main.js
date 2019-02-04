import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import axios from "axios";
import { inject, observer } from "mobx-react";

import * as MainScreenComponents from "../components/Main";
import * as Icons from "../components/Icons";
import { styles } from "../styles";

@inject("appState")
@observer
class Main extends Component {
  static navigationOptions = () => {
    return {
      title: "ELD"
    };
  };

  static propTypes = {
    appState: PropTypes.any
  };

  getDiagnosticsLog = async () => {
    const result = await axios.get("/diagnostic_service_state");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewDiagnosticLog(data);
  };

  getEsnLog = async () => {
    const result = await axios.get("/esn");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewEsnLog(data);
  };

  getGpsLog = async () => {
    const result = await axios.get("/gps");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewGpsLog(data);
  };

  getTachometerLog = async () => {
    const result = await axios.get("/hours_of_service");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewTachometerLog(data);
  };

  getOdometerLog = async () => {
    const result = await axios.get("/odometer");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewOdometerLog(data);
  };

  getVinLog = async () => {
    const result = await axios.get("/vin");

    const data = { ...result.data, time: Date.now() };
    this.props.appState.addNewVinLog(data);
  };

  goScreen = (screenName, apiCall, logs) => {
    this.props.navigation.navigate(screenName, {
      callAPI: apiCall,
      logs
    });
  };

  goDiagnostics = () => {
    this.goScreen("Diagnostics", this.getDiagnosticsLog);
  };

  goESN = () => {
    this.goScreen("ESN", this.getEsnLog);
  };

  goGPS = () => {
    this.goScreen("GPS", this.getGpsLog);
  };

  goTachometer = () => {
    this.goScreen("Tachometer", this.getTachometerLog);
  };

  goOdometer = () => {
    this.goScreen("Odometer", this.getOdometerLog);
  };

  goVIN = () => {
    this.goScreen("VIN", this.getVinLog);
  };

  componentDidMount = () => {
    axios.defaults.baseURL = this.props.appState.baseUrl;
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

export default Main;
