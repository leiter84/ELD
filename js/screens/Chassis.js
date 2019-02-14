import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import * as Common from "../components/Common";
import { styles } from "../styles";

@inject("appState")
@observer
class Chassis extends Component {
  static navigationOptions = () => {
    return {
      title: "Chassis"
    };
  };

  static propTypes = {
    appState: PropTypes.any
  };

  render() {
    const { callAPI } = this.props.navigation.state.params;
    const logs = this.props.appState.chassisLogs.slice();

    return (
      <View style={[styles.flexItem, styles.flexAlignCenter]}>
        <Common.SyncButton onPress={callAPI} />
        <Common.LogList data={logs} />
      </View>
    );
  }
}

export default Chassis;
