import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  FlatList,
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
    wifis: []
  };

  static propTypes = {
    appState: PropTypes.any
  };

  isAndroid = () => {
    return Platform.OS === "android";
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
    return (
      <View style={[styles.flexItem]}>
        <View style={[styles.padding(20)]}>
          <Text
            style={[
              styles.flexAlignCenter,
              styles.fontBold,
              styles.fontBigger
            ]}
          >
            Default endpoint
          </Text>
          <TextInput
            style={[styles.paddingInput, styles.fontNeutralSecondary]}
            value={this.props.appState.baseUrl}
            onChangeText={text =>
              this.props.appState.updateBaseUrl(text)
            }
          />
        </View>
        {this.isAndroid() && (
          <React.Fragment>
            <Common.Divider />
            <View style={[styles.padding(20), styles.flexItem]}>
              <Text
                style={[
                  styles.flexAlignCenter,
                  styles.fontBold,
                  styles.fontBigger
                ]}
              >
                Wifi networks
              </Text>
              <FlatList
                data={this.state.wifis}
                keyExtractor={item => item.SSID}
                renderItem={({ item }) => (
                  <Settings.WifiEntry item={item} />
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
