import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import * as Icons from "../Icons";
import { styles } from "../../styles";

export default class SyncButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  };

  state = {
    isFetchingData: false
  };

  _onSync = async () => {
    await this.setState({ isFetchingData: true });
    await this.props.onPress();
    this.setState({ isFetchingData: false });
  };

  render() {
    const boxStyles = [
      styles.flexRow,
      styles.flexCenter,
      styles.flexJustifyEvenly,
      styles.box(180, 100)
    ];
    const textStyles = [styles.fontDarker, styles.fontBigger];

    return this.state.isFetchingData === true ? (
      <View style={boxStyles}>
        <ActivityIndicator
          size="large"
          color={styles.fontDarker.color}
        />
        <Text style={textStyles}>Syncing with TGW</Text>
      </View>
    ) : (
      <TouchableOpacity style={boxStyles} onPress={this._onSync}>
        <Icons.Sync />
        <Text style={textStyles}>Sync data</Text>
      </TouchableOpacity>
    );
  }
}
