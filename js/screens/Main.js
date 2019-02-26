import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import axios from "axios";
import { inject, observer } from "mobx-react";

import * as MainScreenComponents from "../components/Main";
import * as CommonComponents from "../components/Common";
import * as Icons from "../components/Icons";
import { styles } from "../styles";

@inject("appState")
@observer
class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "ELD Diagnostic",
      headerLeft: (
        <CommonComponents.Settings navigation={navigation} />
      )
    };
  };

  static propTypes = {
    appState: PropTypes.any
  };

  getWithTimestamps = async endpoint => {
    try {
      const callStart = new Date();
      const result = await axios.get(endpoint);
      const callEnd = new Date();

      return {
        ...result.data,
        callStart: callStart.toISOString(),
        callEnd: callEnd.toISOString()
      };
    } catch (error) {
      this.props.appState.setNoConnection();

      return undefined;
    }
  };

  getDiagnosticsLog = async () => {
    const data = await this.getWithTimestamps(
      "/diagnostic_service_state"
    );
    if (data) {
      this.props.appState.addNewDiagnosticLog(data);
      this.props.appState.setConnection();
    }
  };

  getEsnLog = async () => {
    const data = await this.getWithTimestamps("/esn");
    if (data) {
      this.props.appState.addNewEsnLog(data);
      this.props.appState.setConnection();
    }
  };

  getGpsLog = async () => {
    const data = await this.getWithTimestamps("/gps");
    if (data) {
      this.props.appState.addNewGpsLog(data);
      this.props.appState.setConnection();
    }
  };

  getTachometerLog = async () => {
    const data = await this.getWithTimestamps("/hours_of_service");
    if (data) {
      this.props.appState.addNewTachometerLog(data);
      this.props.appState.setConnection();
    }
  };

  getOdometerLog = async () => {
    const data = await this.getWithTimestamps("/odometer");
    if (data) {
      this.props.appState.addNewOdometerLog(data);
      this.props.appState.setConnection();
    }
  };

  getVinLog = async () => {
    const data = await this.getWithTimestamps("/vin");
    if (data) {
      this.props.appState.addNewVinLog(data);
      this.props.appState.setConnection();
    }
  };

  getChassisLog = async () => {
    const data = await this.getWithTimestamps("/chassisid");
    if (data) {
      this.props.appState.addNewChassisLog(data);
      this.props.appState.setConnection();
    }
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

  goChassis = () => {
    this.goScreen("Chassis", this.getChassisLog);
  };

  componentDidMount = async () => {
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
        <MainScreenComponents.NavIcon
          text="Chassis"
          onPress={this.goChassis}
        >
          <Icons.Chassis />
        </MainScreenComponents.NavIcon>
      </View>
    );
  }
}

export default Main;
