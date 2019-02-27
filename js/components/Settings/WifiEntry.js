import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import { styles } from "../../styles";
import * as Icons from "../Icons";

export default class WifiEntry extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    const { item } = this.props;
    return (
      <View
        style={[
          styles.paddingListItem,
          styles.flexItem,
          styles.flexRow,
          styles.flexAlignCenter
        ]}
      >
        <View style={[{ flex: 8 }]}>
          <Text style={[styles.fontBiggest]}>{item.SSID}</Text>
          <Text>{item.BSSID}</Text>
          <Text style={[styles.fontRedDark]}>
            {item.capabilities
              .replace(/]\[/g, ", ")
              .replace(/\[/g, "")
              .replace(/]/g, "")}
          </Text>
        </View>
        {Boolean(
          item.capabilities.includes("WPA") ||
            item.capabilities.includes("WEP")
        ) && <Icons.Lock style={{ marginHorizontal: 5 }} />}
        <Icons.WiFi style={{ marginHorizontal: 5 }} />
        <Text>{100 + Number(item.level)}</Text>
      </View>
    );
  }
}
