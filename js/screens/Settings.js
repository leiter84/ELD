import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  Platform,
  FlatList,
  NetInfo,
  PermissionsAndroid
} from "react-native";
import wifi from "react-native-android-wifi";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import { styles } from "../styles";
import * as Common from "../components/Common";
import * as Settings from "../components/Settings";

@inject("appState")
@observer
class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Settings"
    };
  };

  state = {
    wifis: [],
    showModal: false,
    password: "",
    ssid: ""
  };

  static propTypes = {
    appState: PropTypes.any
  };

  isAndroid = () => {
    return Platform.OS === "android";
  };

  updatePassword = password => {
    this.setState({ password });
  };

  onNetworkSelect = ssid => {
    this.setState({ showModal: true, ssid });
  };

  joinNetwork = () => {
    const { password, ssid } = this.state;
    this.connectToWifi(ssid, password);
  };

  closeDialog = () => {
    this.setState({ showModal: false, password: "" });
  };

  connectToWifi = async (ssid, password) => {
    wifi.findAndConnect(ssid, password, found => {
      if (!found) {
        Alert.alert("Network is no longer available");
      } else {
        NetInfo.getConnectionInfo().then(connectionInfo => {
          if (connectionInfo.type === "wifi") {
            wifi.getSSID(ssid => {
              if (ssid === this.state.ssid) {
                Alert.alert("Connected sucessfully");
              } else {
                Alert.alert(
                  "Couldn't connect, password might be wrong"
                );
              }
              this.setState({ ssid: "" });
            });
          } else {
            Alert.alert("Couldn't connect, password might be wrong");
          }
        });
      }
    });
    this.setState({ password: "", showModal: false });
  };

  async componentDidMount() {
    if (this.isAndroid()) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Wifi networks",
          message:
            "We need your permission in order to find wifi networks"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        wifi.loadWifiList(
          wifiStringList => {
            const wifis = JSON.parse(wifiStringList);
            const uniqueWifis = wifis.reduce(
              (accumulator, newWifi) => {
                if (
                  !accumulator.find(
                    wifi => wifi.SSID === newWifi.SSID
                  )
                ) {
                  accumulator.push(newWifi);
                }
                return accumulator;
              },
              []
            );
            this.setState({ wifis: uniqueWifis });
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  render() {
    const { baseUrl, updateBaseUrl } = this.props.appState;
    const { showModal, password, ssid } = this.state;
    const title = `Join ${ssid} network`;
    return (
      <View style={[styles.flexItem]}>
        <View style={[styles.padding(10)]}>
          <Common.CommonTextField
            label="Default endpoint"
            value={baseUrl}
            onChangeText={text => updateBaseUrl(text)}
          />
          <Common.CommonConfirmationDialog
            show={showModal}
            title={title}
            confirmationText="Join"
            dismissText="Cancel"
            onConfirm={this.joinNetwork}
            onDismiss={this.closeDialog}
            confirmationDisabled={password === ""}
          >
            <View>
              <Common.CommonTextField
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => this.updatePassword(text)}
              />
            </View>
          </Common.CommonConfirmationDialog>
        </View>
        {this.isAndroid() && (
          <React.Fragment>
            <Common.Divider />
            <View style={[styles.padding(10), styles.flexItem]}>
              <Text
                style={[styles.flexAlignCenter, styles.fontBigger]}
              >
                Wifi networks
              </Text>

              <FlatList
                data={this.state.wifis}
                keyExtractor={item => item.SSID}
                renderItem={({ item }) => (
                  <Settings.WifiEntry
                    item={item}
                    onSelect={this.onNetworkSelect}
                  />
                )}
                ListEmptyComponent={() => (
                  <Text style={styles.noData}>No net available</Text>
                )}
              />
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

export default Diagnostics;
