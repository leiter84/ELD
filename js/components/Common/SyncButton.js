import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import { inject, observer } from "mobx-react/native";
import { observable } from "mobx";

import * as Icons from "../Icons";
import { styles } from "../../styles";

@inject("appState")
@observer
class SyncButton extends Component {
  static propTypes = {
    appState: PropTypes.any,
    onPress: PropTypes.func.isRequired
  };

  @observable
  isFetchingData = false;

  _onSync = async () => {
    this.isFetchingData = true;
    await this.props.onPress();
    this.isFetchingData = false;
  };

  render() {
    const boxStyles = [
      styles.flexRow,
      styles.flexCenter,
      styles.flexJustifyEvenly,
      styles.paddingV20
    ];
    const textStyles = [
      styles.fontDarker,
      styles.fontBigger,
      styles.paddingH20
    ];

    return this.isFetchingData === true ? (
      <View style={boxStyles}>
        <ActivityIndicator
          size="large"
          color={styles.fontDarker.color}
        />
        <Text style={textStyles}>Syncing with TGW</Text>
      </View>
    ) : this.props.appState.connectionAvailable === true ? (
      <TouchableOpacity style={boxStyles} onPress={this._onSync}>
        <Icons.Sync />
        <Text style={textStyles}>Sync data</Text>
      </TouchableOpacity>
    ) : (
      <View style={boxStyles}>
        <Icons.NoConnection />
        <Text style={[styles.fontNeutral]}>
          Check your connection or default endpoint
        </Text>
        <TouchableOpacity onPress={this._onSync}>
          <Text style={textStyles}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SyncButton;
